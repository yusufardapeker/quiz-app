import React, { useContext } from "react";
import { QuestionContext } from "../../../context/QuestionContext";

function Category() {
	const {
		currentQuestion: { category },
	} = useContext(QuestionContext);

	const categoryName = category.replaceAll("_", " ");

	return (
		<p className="category-wrapper">
			<span className="category-name">Category:</span>
			{categoryName}
		</p>
	);
}

export default Category;
