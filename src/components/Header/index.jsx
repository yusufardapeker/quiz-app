import React from "react";
import Category from "./components/Category";
import Difficulty from "./components/Difficulty";

function index() {
	return (
		<header>
			<Category />
			<Difficulty />
		</header>
	);
}

export default index;
