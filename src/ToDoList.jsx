import React, {useState} from "react";

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(){
        setNewTask(event.target.value);
    }

    function addTask(){
        // trims empty spaces then checks that it is strictly not equal to empty space.
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
    }

    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){
        if(index > 0){
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    return(<div className="to-do-list">

        <h1>To Do List</h1>

        <div className="inputBox">
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
            <button onClick={addTask} className="add-button">Add</button> 
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>  {/* we have to use arrow function for delete button, otherwise it execute from the beginning */}
                    <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
                    <button onClick={() => moveTaskUp(index)} className="move-button">↑</button>    {/* ↑   &uArr;*/}
                    <button onClick={() => moveTaskDown(index)} className="move-button">↓</button>  {/* ↓   &dArr;*/}
                </li>
            )}
        </ol>
    
    </div>)
}

export default ToDoList;