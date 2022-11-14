import propTypes from "prop-types";
import React, { useState } from "react";


const List = (props) => {

    const [listOfTask, setListOfTask] = useState([])
   const [task, setTask] = useState ()
   const [countTask, setCountTask] = useState (0)
   const counter = () => {
    setListOfTask([...listOfTask, task])
    setCountTask (countTask + 1)
   }
   const deleteTask = (index) => {
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
            {countTask == 0 ? <li className="list-group-item">{props.alert}</li> : listOfTask.map((oneTask, index) => {
                return (
                    <li className="list-group-item" >    
                    {oneTask}
                    <button type="button" class="btn-close" aria-label="Close"
                    onClick={() => deleteTask(index)}></button>    
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default List