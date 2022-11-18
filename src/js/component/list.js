import propTypes from "prop-types";
import React, { useEffect, useState } from "react";


const List = () => {

    const [listOfTask, setListOfTask] = useState([])

    useEffect (() => {

        fetch('https://assets.breatheco.de/apis/fake/todos/user/agosfasanelli')
        .then((response) => {
            console.log(response.ok); // Será true (verdad) si la respuesta es exitosa.
            console.log(response.status); // el código de estado = 200 o código = 400 etc.
            //console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
            return response.json()
        }).then((response) => {
            console.log(response)
            setListOfTask(response)
        })
        .catch(error => {
            console.log(error);
        })

    }, [])

        return (
        <div>
            <ul className="list-group">
                {
                    listOfTask.map((task, index) => {
                        return <li className="list-group-item" key={index}>
                            {task.label}
                        </li>
                    })
                }
            </ul>
            
        </div>
    )
}

export default List