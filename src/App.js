import React, { Component } from "react";
import logo from './logo.svg';
import "./App.css";
import Simpsons from "./components/Simpsons";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleClick() {
    this.setState({});
  }
  render() {
    const isWorkingOrNot = this.state.workingOrNot;
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className= { isWorkingOrNot ? "App-logo" : "App-logo-stop" }  alt="logo" />
        <h1>
          Is homer working?!
        </h1>
      </header>
        <Simpsons
          working = { isWorkingOrNot } 
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <button
          type="button"
          id="btn"
          onClick={ this.isWorking }
        >
          Press
        </button>
      </div>
    );
  }

  isWorking = () => {
    this.setState({workingOrNot: !this.state.workingOrNot}); 
  } 

}

export default App;
