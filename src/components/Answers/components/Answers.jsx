import React, { useContext, useState, useEffect, useRef } from "react";

import { QuestionContext } from "../../../context/QuestionContext";

function index() {
	const {
		currentQuestion: { correctAnswer, incorrectAnswers },
		incrementScore,
		answerElements,
		setAnswerElements,
		shuffle,
		setShuffledAnswers,
		shuffledAnswers,
	} = useContext(QuestionContext);

	const answersRef = useRef([]);
	const allAnswers = [correctAnswer, ...incorrectAnswers];

	useEffect(() => {
		setAnswerElements(answersRef);
		setShuffledAnswers(shuffle(allAnswers));
	}, [correctAnswer]);

	const handleAnswer = (e) => {
		answerElements.current.forEach((element) => element.classList.remove("selected"));
		e.target.closest(".answer-element").classList.add("selected");

		if (e.target.textContent === correctAnswer) incrementScore();
	};

	return (
		<div className="answers-wrapper">
			<ul className="answers">
				{shuffledAnswers.map((answer, index) => (
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
