import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/cardlist-component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    //state management of data trickles down to the attribute
    this.state = {
      //state = empty array
      monsters: [],
      searchField: ''
      // searchField:''     
    };
  }

  //mount and load data from remote endpoint (Api)

  componentDidMount(){
    //fetch users
    fetch('https://jsonplaceholder.typicode.com/users')
    //fetch response and then set new state for monsters empty array
    .then(response => response.json())
    //fetch users ad push to array name monster
    .then(users=> this.setState({ monsters: users}))

  }

  // onSearchChange = e => {

  // }
  
  render(){
    //destructuring, making two constants
    // const monsters = this.state
    //const searchField = this.state

    const { monsters, searchField } = this.state;
    //search filter monster name / case unsentitive
    //include monster.name into 
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
  return (
    <div className="App">
      <input type="search" placeholder='search monsters' onChange={event => {
             
        this.setState({ searchField: event.target.value })} 
      }
      />
      {/* enter cardlist component , the prop being used here */}
      <CardList monsters={filteredMonsters} />
      
    </div>
  );
}
}

export default App;
