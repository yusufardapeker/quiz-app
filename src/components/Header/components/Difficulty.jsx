import { useQuestion } from "../../../context/QuestionContext";

function Difficulty() {
	const {
		currentQuestion: { difficulty },
	} = useQuestion();

	return (
		<p className="difficulty-wrapper">
			<span className="difficulty-label">Difficulty:</span>
			{difficulty}
		</p>
	);
}

export default Difficulty;
