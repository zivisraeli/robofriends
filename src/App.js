import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: robots,
      searchField: ''
    }

  }

  /*componenetDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      response.json();
    }).then((users) => {
      this.setState({ robots: users });
    });
  }
*/
  searchChangeHandler = (ev) => {
    this.setState({ searchField: ev.target.value.toLowerCase() });

  }

  render() {
  	const {robots, searchField} = this.state;
    let filteredRobots = robots.filter((robot) => {
      let result = robot.name.toLowerCase().includes(searchField);
      return result;
    });

    console.log(filteredRobots);

    return (
      <div>
      <h1>Very Robot Friends</h1>
      <SearchBox searchChangeHandler={this.searchChangeHandler} />
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      
    </div>
    );
  }
}

export default App;