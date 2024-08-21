import React, { useContext } from "react";

import { QuestionContext } from "../../../context/QuestionContext";

function QuestionNumber() {
	const { questionNumber } = useContext(QuestionContext);

	return (
		<p className="question-number-text">
			Question <span className="question-number">{questionNumber}</span> of 10
		</p>
	);
}

export default QuestionNumber;
