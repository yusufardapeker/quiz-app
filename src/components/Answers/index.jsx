import React from "react";

import Answers from "./components/Answers";
import ActionButton from "../shared/ActionButton";

function index() {
	return (
		<div>
			<Answers />
			<ActionButton text={"Submit answer"} onclickAction={"loadNextQuestion"} />
		</div>
	);
}

export default index;
