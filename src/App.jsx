import "./styles/reset.css";
import "./styles/style.css";

import QuestionWrapper from "./components/QuestionWrapper";
import Result from "./components/Result";

import { useQuestion } from "./context/QuestionContext";

function App() {
	const { showResult, loading } = useQuestion();

	return (
		<>
			{loading ? (
				<div className="loading">Loading...</div>
			) : (
				<div className="container">{showResult ? <Result /> : <QuestionWrapper />}</div>
			)}
		</>
	);
}

export default App;
