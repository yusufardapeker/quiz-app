import "./styles/reset.css";
import "./styles/style.scss";

import QuestionWrapper from "./components/questionWrapper";
import Result from "./components/Result";

import { QuestionContext } from "./context/QuestionContext";
import { useContext } from "react";

function App() {
	const { showResult, currentQuestion } = useContext(QuestionContext);

	return (
		<>
			{currentQuestion && (
				<div className="container">{showResult ? <Result /> : <QuestionWrapper />}</div>
			)}
		</>
	);
}

export default App;
