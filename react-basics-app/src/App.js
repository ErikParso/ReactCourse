import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    userName: "SuperErik",
    age: 25
  }

  userNameChangedHandler = (event) => {
    this.setState({ ...this.state, userName: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.userNameChangedHandler} value={this.state.userName}/>
        <UserOutput userName={this.state.userName} age={this.state.age} />
        <UserOutput userName="Boris" age="22" />
      </div>
    );
  }

}

export default App;
