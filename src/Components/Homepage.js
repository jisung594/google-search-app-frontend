import React, {Component} from 'react'

class Homepage extends Component {
  state = {
    searchTerm: ""
  }

  changeHandler = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <h2>THIS IS THE HOMEPAGE</h2>
        <input type="text" name="" value={this.state.searchTerm} onChange={this.changeHandler}/>
      </div>
    )
  }
}

export default Homepage
