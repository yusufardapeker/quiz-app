import React from "react";

import Answers from "./components/Answers";
import ActionButton from "../shared/ActionButton";

function index() {
	return (
		<div>
			<Answers />
			<ActionButton onclickAction={"loadNextQuestion"}>Submit answer</ActionButton>
		</div>
	);
}

export default index;
