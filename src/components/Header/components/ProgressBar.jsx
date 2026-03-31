import { useQuestion } from "../../../context/QuestionContext";

function ProgressBar() {
	const { progressRate } = useQuestion();

	return (
		<div className="progress-bar">
			<div className="progress" style={{ width: `${progressRate * 10}%` }}></div>
		</div>
	);
}

export default ProgressBar;
