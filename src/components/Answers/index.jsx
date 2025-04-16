import React, { useContext } from "react";

import Answers from "./components/Answers";
import ActionButton from "../shared/ActionButton";
import { QuestionContext } from "../../context/QuestionContext";

function index() {
	const { showNextButton } = useContext(QuestionContext);

	return (
		<div className="answer">
			<Answers />

			<ActionButton
				visibility={showNextButton ? "visible" : "hidden"}
				onclickAction={"loadNextQuestion"}
			>
				Next
			</ActionButton>
		</div>
	);
}

export default index;
