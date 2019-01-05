import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <img src={logo} className="App-logo" alt="logo" />
        </h1>
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      no: 0,
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber() {
    //console.log('its work');
    this.setState({ no: Math.floor(Math.random() * 100) });
  }

  render() {
    return (
      <div>
        <button onClick={this.getRandomNumber}>RandomNumber</button>
        <Number mynumber={this.state.no} />
      </div>
    );
  }
}

class Number extends Component {
  render() {
    return <div>{this.props.mynumber}</div>;
  }
}

export default App;
