import { createContext, useState, useEffect, useContext } from "react";

export const QuestionContext = createContext();

function QuestionProvider({ children }) {
	const [questions, setQuestions] = useState([]);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(true);
	const [shuffledAnswers, setShuffledAnswers] = useState([]);
	const [showNextButton, setShowNextButton] = useState(false);
	const [progressRate, setProgressRate] = useState(1);
	const [hasError, setHasError] = useState(false);

	const fetchData = async () => {
		try {
			setLoading(true);
			setHasError(false);
			const res = await fetch("https://the-trivia-api.com/v2/questions/");
			const data = await res.json();
			setQuestions(data);

			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}
		} catch (error) {
			console.log("Error", error);
			setHasError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const loadNextQuestion = () => {
		const totalQuestionNumber = questions.length - 1;

		if (questionIndex < totalQuestionNumber) {
			setQuestionIndex((prev) => prev + 1);
			setProgressRate((prev) => prev + 1);
		} else {
			setShowResult(true);
		}

		setShowNextButton(false);
	};

	const incrementScore = () => {
		setScore((prev) => prev + 1);
	};

	const playAgain = () => {
		fetchData();
		setQuestionIndex(0);
		setScore(0);
		setShowResult(false);
		setProgressRate(1);
	};

	return (
		<QuestionContext.Provider
			value={{
				questionIndex,
				currentQuestion: questions[questionIndex],
				score,
				showResult,
				loading,
				shuffledAnswers,
				showNextButton,
				progressRate,
				hasError,
				setProgressRate,
				setShowNextButton,
				setShuffledAnswers,
				loadNextQuestion,
				incrementScore,
				playAgain,
			}}
		>
			{children}
		</QuestionContext.Provider>
	);
}

function useQuestion() {
	const context = useContext(QuestionContext);

	return context;
}

export { useQuestion, QuestionProvider };
