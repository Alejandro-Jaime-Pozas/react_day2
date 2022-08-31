import React from 'react'
import { useState, useEffect } from 'react';


export default function Racers(props) {
    
    const [racers, setRacers] = useState([]);

    const [season, setSeason] = useState(2022);
    const [round, setRound] = useState(0);

    // create an effect -> fn to execute after every render on website fetching api data
    useEffect(() => {
        console.log('useEffect callback executed')
        fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setRacers(racerStandings);
            })
    }, [season, round]); // this list [season, round] only runs if the variables have changed above, since to fill the table we only need the same season and round for each query, we insert season, round to indicate that the state will not be changed for those variables, which are fetched in the API


    // Function to be exectuted when the name form is submitteed
    function handleRacerSubmit(e){
        // Prevent default of refreshing page
        e.preventDefault();
        // Get the value from the form
        // console.log(e)
        let newSeason = e.target.season.value;
        let newRound = e.target.round.value;
        // console.log(newSeason, newRound);
        setSeason(newSeason);
        setRound(newRound);
    }
    

    let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']

    return (
        <div className='row py-3'>
            <h4 className="text-center">Driver Standings</h4>
            <form onSubmit={handleRacerSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <input className='form-control' type="text" name="season" id="" placeholder='Enter Season' />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <input className='form-control' type="text" name="round" id="" placeholder='Enter Round' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="submit" value='Submit' className='btn btn-primary my-4' />
                    </div>
                </div>

            </form>
            <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {racers.map((racer, idx) => {
                    return (
                        <tr>
                            <th>{racer.position}</th>
                            <td>{racer.Driver.givenName}</td>
                            <td>{racer.Driver.familyName}</td>
                            <td>{racer.points}</td>
                            <td>{racer.wins}</td>
                            <td>{racer.Driver.nationality}</td>
                            <td>{racer.Constructors[0].name}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        
        </div>
    )
}
