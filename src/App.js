import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import WeatherWidget from "./components/weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}





function App() {
  const[inputValue,setInputValue]=useState('Bengaluru')
  const[location,setLocation]=useState('Bengaluru')

  const handleFormSubmit = (e) =>   {
    e.preventDefault()
    setLocation(inputValue)

  }

  return (
    <div >
         <form onSubmit={handleFormSubmit}>
          <input type="text" value={inputValue}  onChange={(e)=>{setInputValue(e.target.value)}}/>
<button type="submit">Update Location</button>
         </form>
      
      <WeatherWidget location={location}/>
    </div>
  );
}

export default App;
