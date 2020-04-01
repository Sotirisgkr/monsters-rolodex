import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []
    };
  }
// when this component mounts, it cause whatever kind block of code we right inside
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  };

  render(){
    return(
      <div className="App">
        {
          // map returns the return of whatever function we pass to it.
          this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>))
        }      
      </div>
    )
  }
}
export default App;
