import React, { useState } from 'react';
import ToDoCard from './ToDoCard';
import ToDoForm from './ToDoForm';

export default function ToDo(props) {
    const [tasks, setTasks] = useState([]); // useState([]) returns an array with an empty array, and a fn [Array(0), fn]
    // setTasks is the fn that will set the new state, and trigger a change in the state
    // setTasks is linked to its useState, meaning it pertains to only that particular useState and not another
    function updateTasks(e){
        e.preventDefault();
        let newTask = e.target.task.value;
        setTasks([...tasks, newTask]);
        console.log(newTask);
        e.target.task.value = '' // this creates a new blank field on the input for next iteration
    }

    // console.log(tasks) 
    // console.log(setTasks) 
    return (
        <>
            <h1 className='text-center'>To-Do List</h1>
            {/* handleSumbit is a property (prop) we are creating. onSubmit is an exiting attr from html */}
            <ToDoForm handleSubmit={updateTasks} /> 
            <div className='row mt-5'>
                {tasks.map((task, i) => <ToDoCard task={task} key={i} />)}
            </div>
        
        </>
    )
}
