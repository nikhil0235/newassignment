class QuestionGenerator {
    constructor(questionStore) {
        this.questionStore = questionStore;
    }

    generatePaper(totalMarks, difficultyDistribution) {
        const paper = [];
        const topicDistribution = {};
        const subjectDistribution = {};

        for (const [difficulty, [percentage,marks]] of Object.entries(difficultyDistribution)) {
            const difficultyQuestions = this.filterQuestions(difficulty);
            const numQuestions = Math.floor(((percentage*totalMarks) /(marks*100)));
            const selectedQuestions = this.getRandomQuestions(difficultyQuestions, numQuestions);

            paper.push(...selectedQuestions);

            // Update topic distribution
            selectedQuestions.forEach(question => {
                topicDistribution[question.topic] = (topicDistribution[question.topic] || 0) + 1;
                subjectDistribution[question.subject] = (subjectDistribution[question.subject] || 0) + 1;
            });
        }

        // Calculate percentages for topics and subjects
        const totalQuestions = paper.length;
        const topicPercentage = this.calculatePercentageDistribution(topicDistribution, totalQuestions);
        const subjectPercentage = this.calculatePercentageDistribution(subjectDistribution, totalQuestions);
        return { paper, topicDistribution, subjectDistribution, topicPercentage, subjectPercentage };
    }

    filterQuestions(difficulty) {
        return this.questionStore.filter(question => question.difficulty === difficulty);
    }

    getRandomQuestions(questions, num) {
        const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        return shuffledQuestions.slice(0, num);
    }

    calculatePercentageDistribution(distribution, total) {
        const percentageDistribution = {};
        for (const [key, count] of Object.entries(distribution)) {
            percentageDistribution[key] = {
                percentage: (count / total) * 100,
                count: count,
            };
        }
        return percentageDistribution;
    }
}

module.exports = { QuestionGenerator };