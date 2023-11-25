// Function to generate questions with specific marks based on difficulty
const generateSampleQuestions = () => {
  // // List of available subjects
  // const subjects = ["Physics", "Chemistry", "Biology", "Mathematics", "Geography", "History", "Computer Science"];
  
  // // List of available topics
  // const topics = ["Waves", "Electric Current", "Chemical Reactions", "Algebra", "Countries", "World Wars", "Programming"];

  // // Function to generate a random subject from the list of subjects
  // const getRandomSubject = () => subjects[Math.floor(Math.random() * subjects.length)];

  // // Function to generate a random topic from the list of topics
  // const getRandomTopic = () => topics[Math.floor(Math.random() * topics.length)];

  // // Function to generate a random difficulty level (Easy, Medium, Hard)
  // const getRandomDifficulty = () => Math.random() < 0.4 ? "Easy" : Math.random() < 0.8 ? "Medium" : "Hard";

  // // Function to assign specific marks based on difficulty level
  // const getMarksByDifficulty = (difficulty) => {
  //   if (difficulty === "Easy") {
  //     return 5;
  //   } else if (difficulty === "Medium") {
  //     return 8;
  //   } else {
  //     return 10;
  //   }
  // };

  // // Declare an array to store the generated sample questions
  // const sampleQuestions = [];

  // // Prepare a set of 1000 questions using the above functions
  // for (let i = 1; i <= 1000; i++) {
  //   const difficulty = getRandomDifficulty();
  //   sampleQuestions.push({
  //     question: `Question ${i}: What is ${getRandomSubject()} related to ${getRandomTopic()}?`,
  //     subject: getRandomSubject(),
  //     topic: getRandomTopic(),
  //     difficulty: difficulty,
  //     marks: getMarksByDifficulty(difficulty)
  //   });
  // }

  // // Return the array of generated sample questions
  const sampleQuestions = [
    // Easy difficulty
    { question: "What is the speed of light1", subject: "Physics", topic: "Waves1", difficulty: "Easy", marks: 5 },
    { question: "How do plants perform photosynthesis", subject: "Biology", topic: "Photosynthesis", difficulty: "Easy", marks: 5 },
    { question: "What is the capital of France", subject: "Geography", topic: "World Capitals", difficulty: "Easy", marks: 5 },
    { question: "Who wrote Romeo and Juliet", subject: "Literature", topic: "Shakespeare", difficulty: "Easy", marks: 5 },
    { question: "What is the largest planet in our solar system", subject: "Astronomy", topic: "Planets", difficulty: "Easy", marks: 5 },
    { question: "How many continents are there on Earth", subject: "Geography", topic: "Continents", difficulty: "Easy", marks: 5 },
    { question: "What is the formula for water", subject: "Chemistry", topic: "Chemical Formulas", difficulty: "Easy", marks: 5 },
    { question: "Who discovered penicillin", subject: "Medicine", topic: "Medical Discoveries", difficulty: "Easy", marks: 5 },
    { question: "What is the square root of 64", subject: "Math", topic: "Algebra", difficulty: "Easy", marks: 5 },
    { question: "Who painted the Mona Lisa", subject: "Art", topic: "Famous Paintings", difficulty: "Easy", marks: 5 },
    // Add 10 more easy questions directly
    { question: "Additional Easy Question 1", subject: "General Knowledge", topic: "Miscellaneous", difficulty: "Easy", marks: 5 },
    { question: "Additional Easy Question 2", subject: "General Science", topic: "Miscellaneous", difficulty: "Easy", marks: 5 },
    // ... Add 8 more easy questions directly
  
    // Medium difficulty
    { question: "Explain the theory of relativity", subject: "Physics", topic: "Relativity", difficulty: "Medium", marks: 10 },
    { question: "Solve the quadratic equation x^2 - 4x + 4 = 0", subject: "Math", topic: "Quadratic Equations", difficulty: "Medium", marks: 10 },
    { question: "Name the process of converting water vapor to liquid", subject: "Chemistry", topic: "States of Matter", difficulty: "Medium", marks: 10 },
    { question: "In which year did World War II end", subject: "History", topic: "World Wars", difficulty: "Medium", marks: 10 },
    { question: "Who is the author of 'To Kill a Mockingbird'", subject: "Literature", topic: "Classic Novels", difficulty: "Medium", marks: 10 },
    { question: "What is the formula for calculating density", subject: "Physics", topic: "Density", difficulty: "Medium", marks: 10 },
    { question: "Name the largest desert in the world", subject: "Geography", topic: "Deserts", difficulty: "Medium", marks: 10 },
    { question: "Who developed the theory of natural selection", subject: "Biology", topic: "Evolution", difficulty: "Medium", marks: 10 },
    { question: "What is the capital of Japan", subject: "Geography", topic: "World Capitals", difficulty: "Medium", marks: 10 },
    { question: "Solve the equation 2x + 5 = 15", subject: "Math", topic: "Linear Equations", difficulty: "Medium", marks: 10 },
    // Add 10 more medium questions directly
    { question: "Additional Medium Question 1", subject: "General Knowledge", topic: "Miscellaneous", difficulty: "Medium", marks: 10 },
    { question: "Additional Medium Question 2", subject: "General Science", topic: "Miscellaneous", difficulty: "Medium", marks: 10 },
    // ... Add 8 more medium questions directly
  
    // Hard difficulty
    { question: "Explain the process of cellular respiration", subject: "Biology", topic: "Cell Biology", difficulty: "Hard", marks: 15 },
    { question: "Derive the formula for the area of a circle", subject: "Math", topic: "Geometry", difficulty: "Hard", marks: 15 },
    { question: "Who developed the theory of relativity", subject: "Physics", topic: "Relativity", difficulty: "Hard", marks: 15 },
    { question: "What is the chemical formula for photosynthesis", subject: "Chemistry", topic: "Photosynthesis", difficulty: "Hard", marks: 15 },
    { question: "In which year did the Industrial Revolution begin", subject: "History", topic: "Industrial Revolution", difficulty: "Hard", marks: 15 },
    { question: "Name the elements in the periodic table", subject: "Chemistry", topic: "Periodic Table", difficulty: "Hard", marks: 15 },
    { question: "Who discovered the double helix structure of DNA", subject: "Biology", topic: "Genetics", difficulty: "Hard", marks: 15 },
    { question: "Solve the system of equations 2x + y = 5, x - y = 3", subject: "Math", topic: "Systems of Equations", difficulty: "Hard", marks: 15 },
    { question: "What is the largest mountain on Earth", subject: "Geography", topic: "Mountains", difficulty: "Hard", marks: 15 },
    { question: "Who painted 'Starry Night'", subject: "Art", topic: "Famous Paintings", difficulty: "Hard", marks: 15 },
    // Add 10 more hard questions directly
    { question: "Additional Hard Question 1", subject: "General Knowledge", topic: "Miscellaneous", difficulty: "Hard", marks: 15 },
    { question: "Additional Hard Question 2", subject: "General Science", topic: "Miscellaneous", difficulty: "Hard", marks: 15 },
    // ... Add 8 more hard questions directly
  ];
  return sampleQuestions;
};

// Generate sample questions using the updated function
const sampleQuestions = generateSampleQuestions();

// Export the generated sample questions
module.exports = sampleQuestions;
