// include modules
const express = require('express');

// create express application
const app = express();

// interpret incoming data as plain text
app.use(express.text());

// the port the server will accept connections on
const port = 3000;

function getTheTenMostFrequentWords(words) {
    return Object.fromEntries(
        Object.entries(words)
            .sort(([,a], [,b]) => b-a)  // IMPORTANT that we sort before filtering
            .filter((element, index) => index < 10)
    );
}

app.post('/count', (req, res) => {
    const userInput = req.body;
    const wordFrequency = {};
    for (const word of userInput.split(' ')) {
        if (word in wordFrequency) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    }

    res.status(200).json(getTheTenMostFrequentWords(wordFrequency));
})

// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});