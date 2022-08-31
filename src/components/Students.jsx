import React from 'react'
import { useState, useEffect } from 'react';


export default function Students(props) {
    
    const [students, setStudents] = useState([]);

    // create an effect -> fn to execute after every render on website fetching api data
    useEffect(() => {
        console.log('useEffect callback executed')
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let studentData = data;
                setStudents(studentData);
            })
    }, []); // this list [] only runs if the variables have changed above,


    // Function to be exectuted when the name form is submitteed
    function handleRacerSubmit(e){
        // Prevent default of refreshing page
        e.preventDefault();
        // // Get the value from the form
        // // console.log(e)
        // let newSeason = e.target.season.value;
        // let newRound = e.target.round.value;
        // // console.log(newSeason, newRound);
        // setSeason(newSeason);
        // setRound(newRound);
    }
    

    let tableHeaders = ['ID', 'First', 'Last' ]

    return (
        <div className='row py-3'>
            <h4 className="text-center">Kekambas Students</h4>
            {/* <form onSubmit={handleRacerSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <input className='form-control' type="text" name="number" id="" placeholder='Enter Season' />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <input className='form-control' type="text" name="number2" id="" placeholder='Enter Round' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="submit" value='Submit' className='btn btn-primary my-4' />
                    </div>
                </div>

            </form> */}
            <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, i) => {
                    return (
                        <tr>
                            {/* <th>{student}</th> */}
                            {/* <th>{student.id}</th>
                            <td>{student.first_name}</td>
                            <td>{student.last_name}</td> */}
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        
        </div>
    )
}
