import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    // bind is a method on any function that returns a new function that the context
    // of this is set to whatever we pass to it
    // this.handleChange = this.handleChange.bind(this);

  }


// when this component mounts, it cause whatever kind block of code we write inside
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  };


  // this way is equivalent to binding in class app
  // handleChange = (e) => {}
    handleChange = e => {
      this.setState({ searchField: e.target.value});
    }

  render(){
    // we want to destruct the object state
    // we pull the values from state and we make them consts.
    const { monsters, searchField } = this.state;
    
    // equivalent to const monsters = this.state.monsters;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
        <h1> Monsters Rolodex </h1>
        {/* with onchange, whenever the value changes in the search field, the onchange 
        is called.
        Now, because we want to display the html, we want to GET the value so we 
        want the getTarget value so that it gives us the string value that it holds*/}
        
        {/* <input type='search'
        placeholder='search monsters'
        // because set state is an asynchronous function, we need to use a callback after 
        // the set state to make it 
        onChange={e => this.setState({ searchField: e.target.value})}/> */}
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}
export default App;
