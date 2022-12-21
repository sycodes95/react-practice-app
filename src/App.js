import Overview from "./components/Overview"
import React, { Component } from "react";



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }
  handleClick = () =>{
    this.setState(state => ({ tasks: [...state.tasks,(document.getElementById('taskInput').value)]}))
  }

  render(){
    return (
      <div>
        <input type='text' id='taskInput'/>
        <button onClick={this.handleClick}>Submit</button>
        {
          /*
          <Overview tasks={this.state.tasks} />
          */
        }
        
      </div>

    );
  }
}




export default App;
