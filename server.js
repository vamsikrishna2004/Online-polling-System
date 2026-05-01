
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let votes = {
    "Best IPL Team": {"CSK": 0, "MI": 0, "RCB": 0, "GT": 0},
    "Best IPL Captain": {"Dhoni": 0, "Rohit": 0, "Virat": 0, "Hardik": 0},
    "Best IPL Batsman": {"Virat": 0, "Gill": 0, "Ruturaj": 0, "Rohit": 0},
    "Best IPL Bowler": {"Bumrah": 0, "Shami": 0, "Siraj": 0, "Chahal": 0}
};

app.get('/api/polls', (req, res) => {
    res.json(votes);
});

app.post('/api/vote', (req, res) => {
    const { question, option } = req.body;
    if (votes[question] && votes[question][option] !== undefined) {
        votes[question][option] += 1;
    }
    res.json(votes);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
