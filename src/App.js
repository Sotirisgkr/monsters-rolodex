import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

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
        <CardList name="Sotiris">
        {
          // map returns the return of whatever function we pass to it.
          this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>))
        }
        </CardList>
              
      </div>
    )
  }
}
export default App;
