import React, { createContext, useState, useEffect } from "react";

export const QuestionContext = createContext();

function QuestionProvider({ children }) {
	const [questions, setQuestions] = useState([]);
	const [questionNumber, setQuestionNumber] = useState(1);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("https://the-trivia-api.com/v2/questions/");
			const data = await res.json();
			setQuestions(data);
		};

		fetchData();
	}, []);

	const loadNextQuestion = () => {
		if (questionNumber < 10) {
			setQuestionNumber((prev) => prev + 1);
		} else {
			setShowResult(true);
		}
	};

	const incrementScore = () => {
		setScore((prev) => prev + 1);
	};

	const playAgain = () => {
		// window.location.reload();
		setQuestionNumber(1);
		setScore(0);
		setShowResult(false);
	};

	return (
		<QuestionContext.Provider
			value={{
				questionNumber,
				currentQuestion: questions[questionNumber - 1],
				score,
				showResult,
				loadNextQuestion,
				incrementScore,
				playAgain,
			}}
		>
			{children}
		</QuestionContext.Provider>
	);
}

export default QuestionProvider;
