import React from 'react'

export default function ToDoForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className='form-group'>
                <input type='text' className='form-control' name='task' placeholder='Enter task' />
                <br />
                <input type='submit' value='Add' className='btn btn-primary w-100' />
            </div>
        </form>
    )
}
