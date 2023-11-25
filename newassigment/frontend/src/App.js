import React, { useState } from 'react';
function App() {
  const [totalMarks, setTotalMarks] = useState('');
  const [easyPercentage, setEasyPercentage] = useState('');
  const [mediumPercentage, setMediumPercentage] = useState('');
  const [hardPercentage, setHardPercentage] = useState('');
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [subjectDestribution,setSubjectDistribution]=useState({})
  const [subjectPercentage,setsubjectPercentage]=useState({})
  const [topicDistribution,settopicDistribution]=useState({})
  const [topicPercentage,settopicPercentage]=useState({})
  const generateQuestionPaper = async () => {
    try {
      const response = await fetch('http://localhost:3000/generate-question-paper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalMarks: parseInt(totalMarks),
          // const difficultyDistribution = { Easy: [20,5], Medium: [50,10], Hard: [30,15] };
          distribution: {
            Easy: [parseInt(easyPercentage),5],
            Medium: [parseInt(mediumPercentage),10],
            Hard: [parseInt(hardPercentage),15],
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }

      const data = await response.json();
      console.log(data)
      setQuestions(data.paper);
      setSubjectDistribution(data.subjectDistribution)
      setsubjectPercentage(data.subjectPercentage)
      settopicDistribution(data.topicDistribution)
      settopicPercentage(data.topicPercentage)
      setError('');
    } catch (error) {
      setQuestions([]);
      setError('Error generating question paper. Please check your input.');
    }
  };

  return (
    <div className="App">
      <h1>Question Paper Generator </h1>
      <div>
        <label>Total Marks: </label>
        <input type="number" value={totalMarks} onChange={(e) => setTotalMarks(e.target.value)} />
      </div>
      <div>
        <label>Easy Percentage: </label>
        <input type="number" value={easyPercentage} onChange={(e) => setEasyPercentage(e.target.value)} />
      </div>
      <div>
        <label>Medium Percentage: </label>
        <input type="number" value={mediumPercentage} onChange={(e) => setMediumPercentage(e.target.value)} />
      </div>
      <div>
        <label>Hard Percentage: </label>
        <input type="number" value={hardPercentage} onChange={(e) => setHardPercentage(e.target.value)} />
      </div>
      <button onClick={generateQuestionPaper}>Generate Question Paper</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h2>Generated Questions({questions.length}):</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              Question: {question.question}
               <br /> Marks- {question.marks} Marks
               <br />Difficulty:  ({question.difficulty})
               <br />Subject: ({question.subject})
               <br />Topic: ({question.topic})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Subject Wise Destribution</h2>
        <div>
          {Object.entries(subjectDestribution).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Subject Percentage Destribution</h2>
        <div>
          {Object.entries(subjectPercentage).map(([key, value]) => (
            <div key={key}>
              <strong>Subject: {key}:</strong><br /> Percentage: {value.percentage}<br /> Number of Questions: {value.count}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Topic wise Distribution Destribution</h2>
        <div>
          {Object.entries(topicDistribution).map(([key, value]) => (
            <div key={key}>
              <strong>Topic: {key} <br /></strong>Number of Questions: {value}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2>topicPercentage</h2>
        <div>
          {Object.entries(topicPercentage).map(([key, value]) => (
            <div key={key}>
              <strong>Subject: {key}:</strong><br /> Percentage: {value.percentage}<br /> Number of Questions: {value.count}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
