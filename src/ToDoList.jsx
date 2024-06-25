import React , { useState } from "react";

function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(event){

    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function MoveTaskUp(index){

    }

    function MoveTaskDown(index){

    }
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="tex"
                    placeholder="Enter a task ...">
                    value = {newtask}
                    onChange={handleInputChange}
                </input>
            </div>
        </div>
    )
}

export default TodoList;

