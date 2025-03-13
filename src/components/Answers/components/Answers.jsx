import React, { useContext, useState, useEffect, useRef } from "react";

import { QuestionContext } from "../../../context/QuestionContext";

function index() {
	const {
		currentQuestion: { correctAnswer, incorrectAnswers },
		incrementScore,
	} = useContext(QuestionContext);

	const [answerElements, setAnswerElements] = useState([]);
	const answersRef = useRef([]);

	const allAnswers = [correctAnswer, ...incorrectAnswers];

	useEffect(() => {
		setAnswerElements(answersRef);
	}, []);

	// In this API correct answer seperated from incorrect ones. So checking logic can seem redundant but yet I want to write it as if correct answer is not always first answer.
	const handleAnswer = (e) => {
		answerElements.current.forEach((element) => element.classList.remove("selected"));
		e.target.closest(".answer-element").classList.add("selected");

		if (e.target.textContent === correctAnswer) incrementScore();
	};

	return (
		<div className="answers-wrapper">
			<ul className="answers">
				{allAnswers.map((answer, index) => (
					<li
						className="answer-element"
						onClick={handleAnswer}
						key={index}
						ref={(el) => (answersRef.current[index] = el)}
					>
						<input type="radio" id={index} />
						<label htmlFor={index}>{answer}</label>
					</li>
				))}
			</ul>
		</div>
	);
}

export default index;
