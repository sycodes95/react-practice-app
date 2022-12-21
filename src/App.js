
import './App.css';
import React from 'react';
import { Component } from 'react';
import Overview from './components/Overview';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }
  handleClick = () =>{
    this.setState(state => ({ tasks: [...state.tasks,(document.getElementById('taskInput').value)]}))
    console.log(this.state)
  }

  render(){
    return (
      <div>
        <input type='text' id='taskInput'/>
        <button onClick={this.handleClick}>Submit</button>
        <Overview task1={this.state.tasks[0]} task2={this.state.tasks[1]} task3={this.state.tasks[2]} />
      </div>

    );
  }
}

export default App;
