import React, { useContext } from "react";

import { QuestionContext } from "../../context/QuestionContext";

function ActionButton({ children, onclickAction, visibility = "hidden" }) {
	const { questionNumber, loadNextQuestion, playAgain, answerElements, setShowNextButton } =
		useContext(QuestionContext);

	const progressElement = document.querySelector(".progress");

	const handleClick = () => {
		switch (onclickAction) {
			case "loadNextQuestion":
				const progressRate = (questionNumber + 2) * 10;

				loadNextQuestion();
				setShowNextButton(false);
				answerElements.current.forEach((element) => element.classList.remove("selected"));
				answerElements.current.forEach((element) => element.classList.remove("correct"));
				progressElement.style.width = `${progressRate}%`;
				break;

			case "playAgain":
				playAgain();
				break;
		}
	};

	return (
		<button className={`btn ${visibility}`} onClick={handleClick}>
			{children}
		</button>
	);
}

export default ActionButton;
