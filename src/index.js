import React from "react";
import ReactDOM from "react-dom";
import Items from "./Items";

import "./styles.css";

function App() {
	return (
		<div className="App">
			<Items />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
