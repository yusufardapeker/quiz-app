import React, { useContext } from "react";
import { QuestionContext } from "../../../context/QuestionContext";

function ShowResult() {
	const { score } = useContext(QuestionContext);

	return (
		<>
			<h2 className="result-text">Quiz Completed!</h2>
			<p className="score-number">You Scored {score} of 10</p>
		</>
	);
}

export default ShowResult;
