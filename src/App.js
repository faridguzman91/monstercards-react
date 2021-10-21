import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/cardlist-component';
import { SearchBox } from './components/search-box/search-cox.component';
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
    //bind handlechange function to state
    this.handleChange = this.handleChange.bind(this)
   // this.handleChange = this.handleChange.bind(this);
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

  handleChange (event) {
    this.setState({ searchField: event.target.value })
  }

  // onSearchChange = e => {

  // }
  
  render(){
    //destructuring, making two constants
    // const monsters = this.state
    //const searchField = this.state

    const { monsters, searchField } = this.state;
    //search filter monster name / case unsentitive
    //include monster.name into search field
    //re render everytime theres a change onChange
    
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      {/* search component */}
      {/* <input type="search" placeholder='search monsters' onChange={event => {
             
        this.setState({ searchField: event.target.value })} 
      }
      /> */}
         
       <SearchBox placeholder="search monsters" handleChange={this.handleChange} />
      {/* enter cardlist component , the prop being used here */}
      {/* instead of passing state monsters, pass filtered monsters */}
      <CardList monsters={filteredMonsters} />
      
    </div>
  );
}
}

export default App;
