import React, { useContext } from "react";
import { QuestionContext } from "../../../context/QuestionContext";

function Category() {
	const {
		currentQuestion: { category },
	} = useContext(QuestionContext);

	const categoryName = category.replaceAll("_", " ");

	return <span className="category-name">{categoryName}</span>;
}

export default Category;
