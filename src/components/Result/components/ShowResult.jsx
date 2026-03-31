import { useQuestion } from "../../../context/QuestionContext";

function ShowResult() {
	const { score } = useQuestion();

	return (
		<>
			<p className="completed-text">Quiz Completed!</p>
			<p className="score">
				You Scored <span className="score-number">{score}</span> of 10
			</p>
		</>
	);
}

export default ShowResult;
