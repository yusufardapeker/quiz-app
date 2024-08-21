import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import QuestionProvider from "./context/QuestionContext.jsx";

createRoot(document.getElementById("root")).render(
	<QuestionProvider>
		<App />
	</QuestionProvider>
);
