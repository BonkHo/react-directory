import React from "react";

function App() {
	return (
		<div className="App">
			<Folder name="My Desktop" />
			<Folder name="Documents" />
			<Folder name="Downloads" />
		</div>
	);
}

const Folder = (props) => {
	let name = props.name || "Folder";
	return <div>{name}</div>;
};

export default App;
