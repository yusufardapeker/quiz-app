import React, { useContext } from "react";

import Answers from "./components/Answers";
import ActionButton from "../shared/ActionButton";
import { QuestionContext } from "../../context/QuestionContext";

function index() {
	const { showNextButton } = useContext(QuestionContext);

	return (
		<div>
			<Answers />

			{showNextButton && <ActionButton onclickAction={"loadNextQuestion"}>Next</ActionButton>}
		</div>
	);
}

export default index;
