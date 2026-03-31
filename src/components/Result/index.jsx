import { useQuestion } from "../../context/QuestionContext";

import ShowResult from "./components/ShowResult";
import ActionButton from "../shared/ActionButton";

function index() {
	const { playAgain } = useQuestion();

	return (
		<div className="result-wrapper">
			<ShowResult />
			<ActionButton handleClick={playAgain}>Play again</ActionButton>
		</div>
	);
}

export default index;
