import React, { createContext, useState, useEffect } from "react";

export const QuestionContext = createContext();

function QuestionProvider({ children }) {
	const [questions, setQuestions] = useState([]);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		setLoading(true);
		const res = await fetch("https://the-trivia-api.com/v2/questions/");
		const data = await res.json();
		setQuestions(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const loadNextQuestion = () => {
		const totalQuestionNumber = questions.length - 1;

		if (questionNumber < totalQuestionNumber) {
			setQuestionNumber((prev) => prev + 1);
		} else {
			setShowResult(true);
		}
	};

	const incrementScore = () => {
		setScore((prev) => prev + 1);
	};

	const playAgain = () => {
		fetchData();
		setQuestionNumber(0);
		setScore(0);
		setShowResult(false);
	};

	return (
		<QuestionContext.Provider
			value={{
				questionNumber,
				currentQuestion: questions[questionNumber],
				score,
				showResult,
				loading,
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
