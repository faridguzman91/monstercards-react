import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/cardlist-component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    //state management of data
    this.state = {
      //state = empty array
      monsters: [],
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
  return (
    <div className="App">
      {/* enter cardlist component , the prop being used here */}
      <CardList monsters={this.state.monsters}>
        {/* on the h1 element display mapped monster array items with id key and monster name property */}
        
     
        </CardList>

    

    </div>
  );
}
}

export default App;
