import propTypes from "prop-types";
import React, { useState } from "react";


const List = (props) => {

    const [listOfTask, setListOfTask] = useState([])
   const [task, setTask] = useState ("")
   const [countTask, setCountTask] = useState (0)
   const counter = () => {
    if (task != ""){
        setListOfTask([...listOfTask, task])
        setCountTask (countTask + 1)
        }
    }
   const deleteTask = (index) => {
    setCountTask (countTask -1) 
    setListOfTask(listOfTask.filter((oneTask, i) => i != index))
   }

        return (
        <div>
            <ul className="list-group">
            <li className="list-group-item">
            <input 
            type="text" 
            className="form-control" 
            placeholder= {props.text} 
            aria-label="Username" 
            onChange={(event) => setTask(event.target.value)}
            onKeyDown = {(event) => event.key == "Enter" ? counter() : ""}
            />
             </li>
            {listOfTask.map((oneTask, index) => {
                return (
                    <li key={index} className="list-group-item" >    
                    {oneTask}
                    <button type="button" className="btn-close fs-6 float-end me-0" aria-label="Close"
                    onClick={() => deleteTask(index)}></button>    
                    </li>
                )
            })}
                <li className="list-group-item fs-6 text-secondary">{countTask >= 1 ? `tienes ${countTask} tareas pendientes` : props.alert}</li>
            </ul>
            
        </div>
    )
}

export default List