import { useEffect, useState } from "react";

import { useQuestion } from "../../../context/QuestionContext";
import { shuffle } from "../../../utils/shuffleArray";
import clsx from "clsx";

function index() {
	const {
		currentQuestion: { correctAnswer, incorrectAnswers },
		incrementScore,
		setShuffledAnswers,
		shuffledAnswers,
		setShowNextButton,
	} = useQuestion();

	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [isAnswered, setIsAnswered] = useState(false);

	useEffect(() => {
		const allAnswers = [correctAnswer, ...incorrectAnswers];
		setShuffledAnswers(shuffle(allAnswers));
		setSelectedAnswer(null);
		setIsAnswered(false);
	}, [correctAnswer]);

	const handleAnswer = (answer) => {
		if (isAnswered) return;

		setSelectedAnswer(answer);
		setIsAnswered(true);
		setShowNextButton(true);

		if (correctAnswer === answer) {
			incrementScore();
		}
	};

	return (
		<div className="answers-wrapper">
			<ul className="answers">
				{shuffledAnswers.map((answer, index) => (
					<li className="answer-element" key={index}>
						<input type="checkbox" id={index} onChange={() => handleAnswer(answer)} />
						<label
							htmlFor={index}
							className={clsx("answer-text", {
								selected: selectedAnswer === answer,
								correct: isAnswered && correctAnswer === answer,
							})}
						>
							{answer}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}

export default index;
