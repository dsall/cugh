import React, { Component } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import {Route} from "react-router-dom";
import Home from "./Components/Home/Home"
import Dashboard from "./Components/Dashboard/DashBoard";
import Navbar from "./Components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div >
        {/* <Navbar /> */}
        <Home />
      </div>
    );
  }
}

export default App;
