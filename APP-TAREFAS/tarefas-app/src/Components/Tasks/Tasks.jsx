import React from "react";
import Task from "../Task/Task";


const Tasks = ({tasks, handleTaskClickComplete, handleTaskDelete}) =>{
    
    return(
        <>
        {tasks.map((task) => (
            <Task 
            handleTaskClickComplete={handleTaskClickComplete} 
            handleTaskDelete={handleTaskDelete}
            task={task}/>
        ))}
        </>
    )
}

export default Tasks;