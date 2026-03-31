import QuestionNumber from "./components/QuestionNumber";
import ProgressBar from "./components/ProgressBar";
import Category from "./components/Category";
import Difficulty from "./components/Difficulty";

function index() {
	return (
		<header>
			<QuestionNumber />
			<ProgressBar />
			<Category />
			<Difficulty />
		</header>
	);
}

export default index;
