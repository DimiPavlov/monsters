import React, { Component } from 'react';
import CardList from "./components/card-list.component/CardList"
import './App.css';
import SearchBox from './components/search-box.component/SearchBox';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [] ,
      searchField: ""
      
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters:users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  }
  
  render() {
      const monsters = this.state.monsters;
      const searchField = this.state.searchField;
      const filteredMonster = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
    return (
      <div className="App">
        <h1>Monster Cards</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange} />
        
        <CardList monsters={filteredMonster} />
        
       </div>
    )
  }
}
 
export default App;
