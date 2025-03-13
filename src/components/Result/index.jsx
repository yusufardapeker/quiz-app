import React from "react";

import ShowResult from "./components/ShowResult";
import ActionButton from "../shared/ActionButton";

function index() {
	return (
		<div className="result-wrapper">
			<ShowResult />
			<ActionButton onclickAction={"playAgain"}>Play again</ActionButton>
		</div>
	);
}

export default index;
