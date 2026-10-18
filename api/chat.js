export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'AI service configuration error. GROQ_API_KEY is not configured.' });
  }

  // Model fallback chain: universally supported production models on Groq
  const modelsToTry = [
    process.env.GROQ_MODEL,
    'llama-3.1-8b-instant',
    'llama3-8b-8192',
    'llama3-70b-8192',
    'mixtral-8x7b-32768'
  ].filter(Boolean);

  let lastError = null;

  for (const model of modelsToTry) {
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
      lastError = { status: response.status, details: errorText };

      // If model not found or access denied, try next model in the chain
      if (response.status === 404 || errorText.includes('model_not_found') || errorText.includes('does not exist')) {
        continue;
      }

      return res.status(response.status).json({ error: 'Error from Groq API', details: errorText });
    } catch (err) {
      lastError = { status: 500, details: err.message };
    }
  }

  console.error('All Groq models failed:', lastError);
  return res.status(lastError?.status || 500).json({ error: 'Error from Groq API', details: lastError?.details });
}
