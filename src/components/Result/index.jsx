import React from "react";

import ShowResult from "./components/ShowResult";
import ActionButton from "../shared/ActionButton";

function index() {
	return (
		<div className="result-wrapper">
			<ShowResult />
			<ActionButton text={"Play again"} onclickAction={"playAgain"} />
		</div>
	);
}

export default index;
