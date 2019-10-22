import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {

  state = {
    userInput: ''
  };

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    this.setState({
      userInput: text.join('')
    })
  }

  render() {

    const charList = this.state.userInput.split('').map((c, i) => {
      return <Char character={c} key={i} click={() => this.deleteCharHandler(i)} />;
    })

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        <div>
          {charList}
        </div>
      </div>
    );
  }
}

export default App;

