import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from './components/Display'
import {Dashboard} from './components/Dashboard'

function App() {
  
  
  const initialCount=0


  const[count,setCount]=useState(initialCount)
  const[balls,setBalls]=useState(initialCount)
  const[strikes,setStrikes]=useState(initialCount)
  const[outs,setOuts]=useState(initialCount)
  const[fouls,setFouls]=useState(initialCount)
  const[hits,setHits]=useState(initialCount)

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
          <Display count={count}/>
         <Dashboard 
         count={count} setCount={setCount}
         strikes={strikes} setStrikes={setStrikes}
          balls={balls} setBalls={setBalls}
           hits={hits} setHits={setHits}
           outs={outs} setOuts={setOuts}
           fouls={fouls} setFouls={setFouls}
           />

        
      </header>
    </div>
  );
}

export default App;
