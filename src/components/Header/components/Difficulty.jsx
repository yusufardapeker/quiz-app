import React, { useContext } from "react";

import { QuestionContext } from "../../../context/QuestionContext";

function Difficulty() {
	const {
		currentQuestion: { difficulty },
	} = useContext(QuestionContext);

	return (
		<p>
			<span className="question-difficulty">Difficulty:</span>
			{difficulty}
		</p>
	);
}

export default Difficulty;
