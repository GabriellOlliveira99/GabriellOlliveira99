import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

import "./App.css"
import AddTask from "./Components/AddTask/AddTask";
import Tasks from "./Components/Tasks/Tasks";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Tomar Café",
      completed: false
    },
    {
      id: "2",
      title: "Tomar Banho",
      completed: false
    },
    {
      id: "3",
      title: "Aprovar Templates",
      completed: false
    },

  ])

  const handleTaskClickComplete = (taskId) =>{
    const newTasks = tasks.map((task) =>{
      if(task.id === taskId) return {... task, completed: !task.completed}
      return task
    })
    setTasks(newTasks)
  }

  const handleTaskAdd = (taskTitle) =>{
    const newTask = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTask)
  }

  const handleTaskDelete = (taskId) =>{
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }



  return (
    <>
    <div className="container">
    <AddTask handleTaskAdd={handleTaskAdd} />
      <Tasks 
      handleTaskClickComplete={handleTaskClickComplete}
      handleTaskDelete={handleTaskDelete}
      tasks={tasks}/>
    </div>
    </>
  )
}

export default App;