import React, { createContext, useState, useEffect } from "react";

export const QuestionContext = createContext();

function QuestionProvider({ children }) {
	const [questions, setQuestions] = useState([]);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(true);
	const [answerElements, setAnswerElements] = useState([]);
	const [shuffledAnswers, setShuffledAnswers] = useState([]);

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

	// In this API correct answer seperated from incorrect ones. So I shuffle them otherwise correct answer will always in same place.
	const shuffle = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

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
				answerElements,
				shuffledAnswers,
				shuffle,
				setShuffledAnswers,
				setAnswerElements,
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
