import React, { useContext, useState, useEffect } from "react";

import { QuestionContext } from "../../../context/QuestionContext";

function index() {
	const { currentQuestion, incrementScore } = useContext(QuestionContext);
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		const answerElements = document.querySelectorAll(".answer-element");

		setAnswers(answerElements);
	}, []);

	// In this API correct answer seperated from incorrect ones. So checking logic can seem redundant but yet I want to write it as if correct answer is not always first answer.
	const handleClick = (e) => {
		answers.forEach((answer) => {
			answer.classList.remove("selected");
		});

		e.target.closest(".answer-element").classList.add("selected");

		if (
			e.target.closest(".answer-element").classList.value.includes("selected") &&
			e.target.textContent === currentQuestion.correctAnswer
		) {
			incrementScore();
		}
	};

	return (
		<div className="answers-wrapper">
			<ul className="answers">
				<li className="answer-element" onClick={(e) => handleClick(e)}>
					<input type="radio" id="answer-1" />
					<label htmlFor="answer-1">{currentQuestion.correctAnswer}</label>
				</li>

				{currentQuestion.incorrectAnswers.map((answer, index) => {
					return (
						<li className="answer-element" key={index} onClick={(e) => handleClick(e)}>
							<input type="radio" id={`answer-${index + 2}`} />
							<label htmlFor={`answer-${index + 2}`}>{answer}</label>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default index;
