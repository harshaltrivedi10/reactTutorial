import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // Only in class based components generally, changed in react 18
  state = {
    persons: [
      {
        id: "a1",
        name: "Harshal",
        age: 22
      },
      {
        id: "b2",
        name: "Punit",
        age: 23
      },
      {
        id: "c3",
        name: "Kunj",
        age: 23
      }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  // function as a value
  // if we dont use ES6, this will introduce errors while accessing state using this keyword
  // switchNameHandler = (newName) => {
  //   this.setState({persons: [
  //     {
  //       name: "Harshal Trivedi",
  //       age: 22
  //     },
  //     {
  //       name: newName,
  //       age: 23
  //     },
  //     {
  //       name: "Kunj Patel",
  //       age: 23
  //     }
  //   ]});
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = this.state.persons[personIndex];
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return (
              <Person
                key = { person.id }
                name = { person.name }
                age = { person.age }
                click = { () => this.deletePersonHandler(index) }
                change = { (event) => this.nameChangedHandler(event, person.id) } />    
            );  
          }) }
        </div>
      );
    }

    return (
      <div className = "App">
        <h1>Hi, I'm a React App</h1>
        <p>This works</p>
        <button
          onClick = {() => this.togglePersonsHandler() }
          style = { style } >Toggle Persons</button>
        { persons }
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi! I\'m a React App!!!'));
  }
}

export default App;
