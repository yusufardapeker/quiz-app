import React, { useContext } from "react";
import { QuestionContext } from "../../../context/QuestionContext";

function QuestionText() {
	const { currentQuestion } = useContext(QuestionContext);

	return <p>{currentQuestion.question.text}</p>;
}

export default QuestionText;
