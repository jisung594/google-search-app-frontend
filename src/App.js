import React from 'react';
import './App.css';
import Homepage from './Components/Homepage'

function App() {
  constructor(props) {
    super(props)

    this.state = {
      apiResponse: ""
    }
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({
        apiResponse: res
      }))
  }

  componentWillMount() {
    this.callAPI();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>hi, this is from the APP component (pure React)</h2>
        <p>line below is the response from API</p>
        <p>{this.state.apiResponse}</p>
        <Homepage/>
      </header>
    </div>
  );
}

export default App;
