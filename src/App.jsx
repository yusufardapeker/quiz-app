import "./styles/reset.css";
import "./styles/style.scss";

import QuestionWrapper from "./components/questionWrapper";
import Result from "./components/Result";

import { QuestionContext } from "./context/QuestionContext";
import { useContext } from "react";

function App() {
	const { showResult, loading } = useContext(QuestionContext);

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
