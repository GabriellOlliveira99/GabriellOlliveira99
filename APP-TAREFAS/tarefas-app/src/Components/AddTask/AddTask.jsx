import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import "./AddTask.css"


const AddTask = ({handleTaskAdd}) => {
    const [handleInput, sethandleInput] = useState("");

    const handleInputChange = (event) =>{
        sethandleInput(event.target.value)
    }

    const handleAddTaskClick = () =>{
        handleTaskAdd(handleInput)
        sethandleInput("")
    }

    return (
        <div className='add-task-container'>
            <input 
            className='add-task-input' 
            value={handleInput} 
            onChange={handleInputChange} 
            type="text"
            placeholder='Enter a new task.' />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}

export default AddTask;