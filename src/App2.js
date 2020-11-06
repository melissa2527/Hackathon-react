import React, { useState, useEffect } from 'react'


import './App.css';

function App2() {

  const [ flight, setFlight ] = useState([])
  const [ departure, setDeparture ] = useState('')
  const [ destination, setDestination ] = useState('')

  const url = 'https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3'

  const searchFlights = async (e) => {
    // e.preventDefault()

    try {
      const response = await fetch(url)
      const data = await response.json()
      // setFlight(data)
      console.log(data)
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    searchFlights();
    console.log(departure)
  },[departure, destination])

  const selectDeparture = (e) => {
    setDeparture(
      e.target.value
    )
  } 

  return (
    <div className="App">
      Hanka
      <form className="form" onSubmit={searchFlights}>
        <label className="label" htmlFor="departure">Departure</label>
          <select name="departure" onChange={selectDeparture}>
            <option value="PRG">Prague</option>
            <option value="TXL">Berlin</option>
            <option value="WAW">Warsaw</option>
            <option value="">Pardubice</option>
          </select>

        <label>Destination</label>
        <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
        </select>
            
          <button className="button">search</button>
      </form>
    </div>
  );
}

export default App2;