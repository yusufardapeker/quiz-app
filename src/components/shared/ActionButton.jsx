import React, { useContext, useState, useEffect } from "react";

import { QuestionContext } from "../../context/QuestionContext";

function ActionButton({ text, onclickAction }) {
	const { questionNumber, loadNextQuestion, playAgain } = useContext(QuestionContext);

	const [answers, setAnswers] = useState([]);
	const [progress, setProgress] = useState();

	useEffect(() => {
		const answerElements = document.querySelectorAll(".answer-element");
		setAnswers(answerElements);

		const progress = document.querySelector(".progress");
		setProgress(progress);
	}, []);

	const handleClick = () => {
		if (onclickAction === "loadNextQuestion") {
			loadNextQuestion();

			answers.forEach((answer) => {
				answer.classList.remove("selected");
			});

			progress.style.width = `${(questionNumber + 1) * 10}%`;
		} else if (onclickAction === "playAgain") {
			playAgain();
		}
	};

	return (
		<button className="btn" onClick={handleClick}>
			{text}
		</button>
	);
}

export default ActionButton;
