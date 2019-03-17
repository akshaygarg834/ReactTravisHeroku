import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => {
        return data.json()
      })
      .then(responsedata => this.setState({ users: responsedata }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
          </ul>
        </header>

      </div>
    );
  }
}

export default App;
