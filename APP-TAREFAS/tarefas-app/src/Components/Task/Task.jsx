import React from 'react';


import "./Task.css"


const Task = ({ task, handleTaskClickComplete, handleTaskDelete }) => {
    return (
        <div className='container-task' style={task.completed ? { borderLeft: '6px solid #FF1493' } : {}}>
            <div onClick={() => handleTaskClickComplete(task.id)} className="task-title">
                {task.title}
            </div>

            <div className='buttons-container'>
                <button onClick={()=> handleTaskDelete(task.id)} className='remove-task-button'>X</button>
            </div>
        </div>
    );
}

export default Task;