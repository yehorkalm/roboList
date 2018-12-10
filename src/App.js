import React from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import Search from './Search';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    let robotsJson = [];

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ robots: json }));
  }

  onSearch = event => {
    // console.log(event.target.value);
    this.setState({ searchField: event.target.value });

    console.log(this.state.searchField);
  };

  render() {
    const filteredBots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div>
        <h1 className='tc f1'> Robot Friends </h1>
        <Search searchChange={this.onSearch} />
        <Cardlist robots={filteredBots} />
      </div>
    );
  }
}
export default App;
