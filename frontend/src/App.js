import React from 'react';
import axios from 'axios'

class App extends React.Component {
  state = {
    data : []
  }

  buttonHandle = () => {
    let data = null
    axios.get('http://localhost:3001/')
      .then(data => {
        console.log(data)
        data = data
      })

      this.setState({
        data:data
      })
  }

  render() {
    return (
      <div className="App">

        <h2> {this.state.data} </h2>

        <button onClick={this.buttonHandle}>Click</button>
      </div>
    );
  }
}

export default App;
