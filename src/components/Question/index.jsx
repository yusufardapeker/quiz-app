import React from "react";

import QuestionNumber from "./components/QuestionNumber";
import QuestionText from "./components/QuestionText";
import ProgressBar from "./components/ProgressBar";

function index() {
	return (
		<div className="question-container">
			<QuestionNumber />
			<QuestionText />
			<ProgressBar />
		</div>
	);
}

export default index;
