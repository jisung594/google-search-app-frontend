import React, {Component} from 'react'
import './App.css';
import Homepage from './Components/Homepage'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      apiResponse: ""
    }
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({
        apiResponse: res
      }))
      .catch(err => err)
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>hi, this is from the APP component (pure React)</h2>
          <p>line below is the response from API</p>
          <p className="App-intro">{this.state.apiResponse}</p>

          {/*
          <Homepage/>
          */}

        </header>
      </div>
    )
  }
}

export default App;
