import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // Only in class based componentsgenerally, changed in react 18
  state = {
    persons: [
      {
        name: "Harshal",
        age: 22
      },
      {
        name: "Punit",
        age: 23
      },
      {
        name: "Kunj",
        age: 23
      }
    ],
    otherState: 'some other value'
  }

  // function as a value
  // if we dont use ES6, this will introduce errors while accessing state using this keyword
  switchNameHandler = () => {
    this.setState({persons: [
      {
        name: "Harshal Trivedi",
        age: 22
      },
      {
        name: "Punit",
        age: 23
      },
      {
        name: "Kunj Patel",
        age: 25
      }
    ]});
  }

  render() {
    return (
      <div className = "App">
        <h1>Hi, I'm a React App</h1>
        <p>This works</p>
        <button onClick={ this.switchNameHandler }>Switch Name</button>
        <Person name = { this.state.persons[0].name } age = { this.state.persons[0].age }/>
        <Person name = { this.state.persons[1].name } age = { this.state.persons[1].age } />
        <Person name = { this.state.persons[2].name } age = { this.state.persons[2].age }> My hobbies: Playing football </Person>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi! I\'m a React App!!!'));
  }
}

export default App;
