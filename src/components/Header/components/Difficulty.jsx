import React, { useContext } from "react";

import { QuestionContext } from "../../../context/QuestionContext";

function Difficulty() {
	const {
		currentQuestion: { difficulty },
	} = useContext(QuestionContext);

	return <span className="question-difficulty">{difficulty}</span>;
}

export default Difficulty;
