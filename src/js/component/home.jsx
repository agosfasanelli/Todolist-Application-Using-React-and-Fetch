import React from "react";
import List from "./list";

//create your first component
const Home = () => {


	return (
		<div className="text-center mt-3">
			<h1>To Do List</h1>
			<div className="col-7 col-md-4 mx-auto mt-3 text-center">
				<List />	
			</div>		
		</div>
	);
};

export default Home;
