const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const questionStore = require('./sampleData');
const {QuestionGenerator} =require('./questionGenerator')

const generator = new QuestionGenerator(questionStore);
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/generate-question-paper', (req, res) => {
  const { totalMarks, distribution } = req.body;

  if (!totalMarks || !distribution) {
    return res.status(400).json({ error: 'Invalid request. Please provide totalMarks and distribution in the request body.' });
  }

  const { paper, topicDistribution, subjectDistribution, topicPercentage, subjectPercentage } = generator.generatePaper(totalMarks, distribution);
  res.json({ paper, topicDistribution, subjectDistribution, topicPercentage, subjectPercentage });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
