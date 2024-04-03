import React, { useState } from 'react';
import './App.css';

function App() {
  const [car, setCar] = useState([])
  const [year, setYear] = useState(new Date().getFullYear())
  const [make, setMake] = useState()
  const [model, setModel] = useState()

  function handleAdd() {
    const newCar = {
      year: year,
      make: make,
      model: model
    };

    setCar(c => [...car, newCar])
    setYear(new Date().getFullYear())
    setMake("")
    setModel("")

  }

  function handleYear(e) {
    setYear(e.target.value)

  }
  function handleMake(e) {
    setMake(e.target.value)
  }
  function handleModel(e) {
    setModel(e.target.value)
  }




  return (
    <div>
      <h1>LIST OF CAR OBJECT</h1>
      <ul>
        {car.map((c, i) =>
          <li key={i}>
          ✅  {c.year} {c.make} {c.model}

          </li>
        )}
      </ul>
      <div className='input-clas'>
        <input type='number' onChange={handleYear} value={year}></input>
        <input placeholder='Enter Car Brand' type='text' onChange={handleMake} value={make}></input>
        <input placeholder='Enter Car Model' type='text' onChange={handleModel} value={model}></input>

      </div>

      <div className='button-clas'>

        <button onClick={handleAdd} >Add Car!</button>

      </div>


    </div>
  );
}

export default App;
