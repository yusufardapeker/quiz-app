import React, { useContext, useState, useEffect } from "react";

import { QuestionContext } from "../../context/QuestionContext";

function ActionButton({ children, onclickAction }) {
	const { questionNumber, loadNextQuestion, playAgain } = useContext(QuestionContext);

	const [answers, setAnswers] = useState([]);
	const [progress, setProgress] = useState();

	useEffect(() => {
		const answerElements = document.querySelectorAll(".answer-element");
		setAnswers(answerElements);

		const progressElement = document.querySelector(".progress");
		setProgress(progressElement);
	}, []);

	const handleClick = () => {
		switch (onclickAction) {
			case "loadNextQuestion":
				const progressRate = (questionNumber + 2) * 10;

				loadNextQuestion();
				answers.forEach((answer) => answer.classList.remove("selected"));
				progress.style.width = `${progressRate}%`;
				break;

			case "playAgain":
				playAgain();
				break;
		}
	};

	return (
		<button className="btn" onClick={handleClick}>
			{children}
		</button>
	);
}

export default ActionButton;
