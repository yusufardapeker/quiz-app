import "./styles/reset.css";
import "./styles/style.scss";

import Header from "./components/Header";
import Question from "./components/Question";
import Answers from "./components/Answers";
import Result from "./components/Result";

import { QuestionContext } from "./context/QuestionContext";
import { useContext } from "react";

function App() {
	const { showResult, currentQuestion } = useContext(QuestionContext);

	return (
		<>
			{currentQuestion && (
				<div className="container">
					{!showResult && (
						<>
							<Header />
							<Question />
							<Answers />
						</>
					)}

					{showResult && <Result />}
				</div>
			)}
		</>
	);
}

export default App;
