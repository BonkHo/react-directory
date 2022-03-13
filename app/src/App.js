import React from "react";

function App() {
	return (
		<div className="App">
			<Folder name="My Desktop">
				<Folder name="Music">
					<File name="all_star.mp3" />
				</Folder>
				<File name="dogs.jpg" />
				<File name="cats.jpg" />
			</Folder>
			<Folder name="Documents" />
			<Folder name="Downloads" />
		</div>
	);
}

const Folder = (props) => {
	return (
		<div>
			{props.name}
			<div style={{ marginLeft: "1em" }}>{props.children}</div>
		</div>
	);
};

const File = (props) => {
	let name = props.name || "File";
	return <div>{name}</div>;
};

export default App;
