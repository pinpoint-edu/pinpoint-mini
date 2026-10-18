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
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.content || 'your question';
    return res.status(200).json({
      choices: [{
        message: {
          role: 'assistant',
          content: `Hello! The live AI assistant is in preview mode because \`GROQ_API_KEY\` is not configured in this environment.\n\nOnce configured in Vercel or environment variables with Groq, I can provide full real-time answers powered by Llama 3.3 to study queries like:\n\n> *"${lastUserMsg}"*\n\nIn the meantime, feel free to explore all other Google Classroom tools and features!`
        }
      }]
    });
  }

  try {
    const model = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
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

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API Error:', errorText);
      return res.status(response.status).json({ error: 'Error from Groq API', details: errorText });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}
