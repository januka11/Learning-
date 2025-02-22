const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    // Gemini API call
    const response = await fetch('https://gemini.googleapis.com/v1/chat', {
        method: 'POST',
        headers: {
            'Authorization': 'AIzaSyAHpcLeUAK6huKzM5c1WzAdzzE-BEgoP3M
', // Gemini API key here
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ queryInput: { text: { text: userMessage, languageCode: 'en' } } })
    });
    
    const data = await response.json();
    res.json({ reply: data.responseText });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
