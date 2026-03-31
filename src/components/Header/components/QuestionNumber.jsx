import { useQuestion } from "../../../context/QuestionContext";

function QuestionNumber() {
	const { questionIndex } = useQuestion();

	return (
		<p className="question-number-text">
			Question <span className="question-number">{questionIndex + 1}</span> of 10
		</p>
	);
}

export default QuestionNumber;
