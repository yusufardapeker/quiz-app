import { useQuestion } from "../../../context/QuestionContext";

function Category() {
	const {
		currentQuestion: { category },
	} = useQuestion();

	const categoryName = category.replaceAll("_", " ");

	return (
		<p className="category-wrapper">
			<span className="category-name-label">Category:</span>
			{categoryName}
		</p>
	);
}

export default Category;
