import React from 'react'

export default function ToDoCard(props) {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mt-2' >
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title text-center'>{props.task}</h5> 
          </div>
            
        </div>
    </div>
  )
}
