import propTypes from "prop-types";
import React, { useEffect, useState } from "react";


const List = () => {

    const [listOfTask, setListOfTask] = useState([])

    useEffect (() => {

        fetch ('http://assets.breatheco.de/apis/fake/todos/user/agosfasanelli',{
        method: "GET",
    })
        .then ((response) => {
            return response.json()
        }).then (() => {
            console.log ("la respuesta es: ", response) 
            setListOfTask (response.result)
        })
    }, [])
  

        return (
        <div>
            <ul className="list-group">
                {
                    listOfTask.map((task) => {
                        return <li className="list-group-item">{task.label}</li>
                    })
                    
                }
            </ul>
            
        </div>
    )
}

export default List