import React, { useState, useEffect } from 'react';
import './AdaptiveQuiz.css';

const questionBank = [
  { question: '2 + 2', answer: '4', level: 1 },
  { question: '5 + 3', answer: '8', level: 1 },
  { question: '9 - 4', answer: '5', level: 1 },
  { question: '12 + 8', answer: '20', level: 2 },
  { question: '15 - 7', answer: '8', level: 2 },
  { question: '3 x 4', answer: '12', level: 2 },
  { question: '9 x 7', answer: '63', level: 3 },
  { question: '12 x 8', answer: '96', level: 3 },
  { question: '25 / 5', answer: '5', level: 3 },
];

function getRandomQuestion(level) {
  const filtered = questionBank.filter(q => q.level === level);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export default function AdaptiveQuiz() {
  const [level, setLevel] = useState(1);
  const [question, setQuestion] = useState(getRandomQuestion(1));
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    setQuestion(getRandomQuestion(level));
  }, [level]);

  function handleSubmit(e) {
    e.preventDefault();
    const isCorrect = userAnswer.trim() === question.answer;
    if (isCorrect) {
      setFeedback('Correct!');
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setScore(score + level * 10);
      if (nextStreak % 3 === 0 && level < 3) {
        setLevel(level + 1);
      }
    } else {
      setFeedback(`Oops! The correct answer was ${question.answer}`);
      setStreak(0);
      if (level > 1) {
        setLevel(level - 1);
      }
    }
    setUserAnswer('');
    setQuestion(getRandomQuestion(level));
  }

  return (
    <div className="adaptive-quiz">
      <div className="status-bar">
        <span>Level: {level}</span>
        <span>Score: {score}</span>
      </div>
      <form onSubmit={handleSubmit} className="question-form">
        <label>
          {question.question} ={' '}
          <input
            type="text"
            value={userAnswer}
            onChange={e => setUserAnswer(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {feedback && <div className="feedback">{feedback}</div>}
    </div>
  );
}
