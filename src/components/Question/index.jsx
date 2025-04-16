import React, { useContext } from "react";
import { QuestionContext } from "../../context/QuestionContext";

function QuestionText() {
	const {
		currentQuestion: { question },
	} = useContext(QuestionContext);

	return (
		<div className="question-container">
			<p>{question.text}</p>
		</div>
	);
}

export default QuestionText;
