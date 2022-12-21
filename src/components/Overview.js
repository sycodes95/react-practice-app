import { Component } from 'react';


class Overview extends Component{
    
    render(){
      return (
        <ul>
          <li>{this.props.task1}</li>
          <li>{this.props.task2}</li>
          <li>{this.props.task3}</li>
          
        </ul>
  
      );
    };
  };

export default Overview;