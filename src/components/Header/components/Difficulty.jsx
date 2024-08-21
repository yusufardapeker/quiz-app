import React, { useContext } from "react";

import { QuestionContext } from "../../../context/QuestionContext";

function Difficulty() {
	const { currentQuestion } = useContext(QuestionContext);

	return <span className="question-difficulty">{currentQuestion.difficulty}</span>;
}

export default Difficulty;
