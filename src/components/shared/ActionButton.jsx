import React, { useContext, useState, useEffect } from "react";

import { QuestionContext } from "../../context/QuestionContext";

function ActionButton({ children, onclickAction }) {
	const { questionNumber, loadNextQuestion, playAgain, answerElements } =
		useContext(QuestionContext);

	const progressElement = document.querySelector(".progress");

	const handleClick = () => {
		switch (onclickAction) {
			case "loadNextQuestion":
				const progressRate = (questionNumber + 2) * 10;

				loadNextQuestion();
				answerElements.current.forEach((answer) => answer.classList.remove("selected"));
				progressElement.style.width = `${progressRate}%`;
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
