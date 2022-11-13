import React from "react";
import List from "./list";

//create your first component
const Home = () => {


	return (
		<div className="text-center">
			<h1>To Do List</h1>
			<div className="col-4 mx-auto">
				<List 
				text= "Que necesitas hacer hoy?"
				alert = "No tienes ningun pendiente"
				
				/>	
			</div>		
		</div>
	);
};

export default Home;
