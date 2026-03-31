import { useQuestion } from "../../context/QuestionContext";

function QuestionText() {
	const {
		currentQuestion: { question },
	} = useQuestion();

	return (
		<div className="question-container">
			<p>{question.text}</p>
		</div>
	);
}

export default QuestionText;
