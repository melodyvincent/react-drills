import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo';



class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ["take garbage", 'wash dishes']
        
      
    };

  }  

  


  render() {
    const maplist = this.state.list.map(item => {
      return(
        <li>{item}</li>
      )
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <ul>{maplist}
          
        </ul>
        
      </div>
    );
  }
}


export default App;
