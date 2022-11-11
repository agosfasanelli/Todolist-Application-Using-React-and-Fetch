import propTypes from "prop-types";
import React from "react";
import React, { useState } from 'react'

const List = () => {

    const [tarea, setTarea] = useState()

    return (
        <div>
            <ul className="list-group">
            <li className="list-group-item">
            <input type="text" class="form-control" placeholder="Que necesitas hacer hoy?" aria-label="Username"/>
            </li>
            <li submit= {() => setTarea(tarea)}>

            </li>
            
            </ul>
        </div>
    )
}

export default List