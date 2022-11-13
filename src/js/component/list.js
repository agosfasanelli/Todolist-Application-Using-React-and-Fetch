import propTypes from "prop-types";
import React, { useState } from "react";


const List = (props) => {

    const [tarea, setTarea] = useState("nueva tarea")
   

        return (
        <div>
            <ul className="list-group">
            <li className="list-group-item">
            <input type="text" className="form-control" placeholder= {props.text} aria-label="Username"/>
            </li>
            <li className="list-group-item">
                {tarea}
            </li>
            <li className="list-group-item">
                {props.alert}
            </li>
            </ul>
        </div>
    )
}

export default List