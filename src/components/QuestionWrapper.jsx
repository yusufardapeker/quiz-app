import Header from "./Header";
import Question from "./Question";
import Answers from "./Answers";
import { useQuestion } from "../context/QuestionContext";

function QuestionWrapper() {
	const { hasError } = useQuestion();

	return (
		<>
			{hasError ? (
				<p className="error-message">An error has been occured...</p>
			) : (
				<div className="question-wrapper">
					<Header />
					<Question />
					<Answers />
				</div>
			)}
		</>
	);
}

export default QuestionWrapper;
