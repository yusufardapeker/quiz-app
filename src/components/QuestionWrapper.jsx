import React from "react";

import Header from "./Header";
import Question from "./Question";
import Answers from "./Answers";

function QuestionWrapper() {
	return (
		<>
			<Header />
			<Question />
			<Answers />
		</>
	);
}

export default QuestionWrapper;
