import React, { useContext } from "react";
import { QuestionContext } from "../../../context/QuestionContext";

function ShowResult() {
	const { score } = useContext(QuestionContext);

	return (
		<>
			<h2 className="result-text">Quiz Completed!</h2>
			<p className="score">
				You Scored <span className="score-number">{score}</span> of 10
			</p>
		</>
	);
}

export default ShowResult;
