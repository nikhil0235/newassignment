const questionStore = require('./sampleData');
const {QuestionGenerator} =require('./questionGenerator')

const generator = new QuestionGenerator(questionStore);

// Set the difficulty distribution for the paper
const difficultyDistribution = { Easy: [20,5], Medium: [50,10], Hard: [30,15] };

// Generate a question paper with a total of 100 marks
const { paper, topicDistribution, subjectDistribution, topicPercentage, subjectPercentage } = generator.generatePaper(100, difficultyDistribution);

// Print the generated question paper, topic distribution, and subject distribution
console.log("Question Paper:");
paper.forEach(question => console.log(question));

console.log("\nTopic Distribution:");
console.log(topicDistribution);

console.log("\nSubject Distribution:");
console.log(subjectDistribution);

console.log("\nTopic Percentage:");
console.log(topicPercentage);

console.log("\nSubject Percentage:");
console.log(subjectPercentage);
