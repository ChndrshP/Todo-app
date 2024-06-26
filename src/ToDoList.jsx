import React, { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, { text: newTask, completed: false }]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function taskCompleted(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };
        setTasks(updatedTasks);
    }

    function clearAll() {
        setTasks([]);
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task ..."
                    value={newTask}
                    onChange={handleInputChange}
                    className="task-input" // Apply the CSS class
                />

                <button className="add-btn" onClick={addTask}>
                    Add
                </button>

                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span className="text" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                            </span>

                            <button className="complete-btn" onClick={() => taskCompleted(index)}>✅</button>

                            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>

                            <button className="move-btn" onClick={() => moveTaskUp(index)}>☝</button>

                            <button className="move-btn" onClick={() => moveTaskDown(index)}>👇</button>
                        </li>
                    ))}
                </ol>

                <button className="clear-btn" onClick={clearAll}>Clear</button>
            </div>
        </div>
    );
}

export default TodoList;
