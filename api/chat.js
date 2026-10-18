export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body || {};
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'AI service configuration error. GROQ_API_KEY is not configured.' });
  }

  // 1. Dynamically discover active models supported by this Groq API key
  let availableModels = [];
  try {
    const modelsRes = await fetch('https://api.groq.com/openai/v1/models', {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    if (modelsRes.ok) {
      const modelsData = await modelsRes.json();
      if (modelsData && Array.isArray(modelsData.data)) {
        availableModels = modelsData.data
          .filter(m => m.active !== false && !m.id.includes('whisper') && !m.id.includes('embed') && !m.id.includes('guard'))
          .map(m => m.id);
      }
    }
  } catch (e) {
    console.warn('Could not list Groq models:', e.message);
  }

  const envModel = process.env.GROQ_MODEL;
  const isDecommissioned = envModel && (envModel.includes('llama3-8b') || envModel.includes('llama3-70b'));

  const modelsToTry = [
    (!isDecommissioned ? envModel : null),
    ...availableModels,
    'llama-3.1-8b-instant',
    'llama-3.3-70b-versatile'
  ].filter(Boolean);

  const uniqueModels = [...new Set(modelsToTry)];
  let lastError = null;

  for (const model of uniqueModels) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: model,
          messages: messages,
          temperature: 0.7,
          max_tokens: 1024
        })
      });

      if (response.ok) {
        const data = await response.json();
        return res.status(200).json(data);
      }

      const errorText = await response.text();
      lastError = { status: response.status, details: errorText, model: model };

      // If model not found, decommissioned, or access denied, try next model in the chain
      if (
        response.status === 404 ||
        response.status === 400 ||
        errorText.includes('model_not_found') ||
        errorText.includes('model_decommissioned') ||
        errorText.includes('decommissioned') ||
        errorText.includes('does not exist')
      ) {
        continue;
      }

      return res.status(response.status).json({ error: 'Error from Groq API', details: errorText });
    } catch (err) {
      lastError = { status: 500, details: err.message, model: model };
    }
  }

  console.error('All Groq models failed:', lastError);
  return res.status(lastError?.status || 500).json({ error: 'Error from Groq API', details: lastError?.details });
}
