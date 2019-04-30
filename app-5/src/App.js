import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Image url={"http://1.bp.blogspot.com/-ZbMgxHNluXU/ThEGJ3FGuWI/AAAAAAAAAvE/SY37Zk2VMrY/s1600/cat_fight21.jpg"}/>
      </div>
    );
  }
}

export default App;


