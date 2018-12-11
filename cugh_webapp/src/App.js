import React, { Component } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import {Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
