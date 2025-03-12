import React, { useContext } from "react";
import { QuestionContext } from "../../../context/QuestionContext";

function QuestionText() {
	const {
		currentQuestion: { question },
	} = useContext(QuestionContext);

	return <p>{question.text}</p>;
}

export default QuestionText;
