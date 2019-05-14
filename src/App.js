import React from 'react';
import './App.css';
import Homepage from './Components/Homepage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>hi, this is from the APP component</h2>
        <Homepage/>
      </header>
    </div>
  );
}

export default App;
