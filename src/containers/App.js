import React from 'react';
import Cardlist from '../components/Cardlist';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
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

    if (this.state.robots.length > 0) {
      return (
        <div>
          <h1 className='tc f1'> Robot Friends </h1>
          <Search searchChange={this.onSearch} />
          <Scroll>
            <Cardlist robots={filteredBots} />
          </Scroll>
        </div>
      );
    } else {
      return <h1 className='tc'>Loading...</h1>;
    }
  }
}
export default App;
