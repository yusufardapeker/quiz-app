import Answers from "./components/Answers";
import ActionButton from "../shared/ActionButton";
import { useQuestion } from "../../context/QuestionContext";

function index() {
	const { showNextButton, loadNextQuestion } = useQuestion();

	return (
		<div className="answer">
			<Answers />

			<ActionButton visibility={showNextButton ? "visible" : "hidden"} handleClick={loadNextQuestion}>
				Next
			</ActionButton>
		</div>
	);
}

export default index;
