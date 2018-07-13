import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      list: ['vacay', 'cheetoes', 'fingers']
    }
    this.handleChange = this.handleChange.bind(this) // binding here makes it so handleChange is 
    // created as a property of any new instance of this class, rather than on it's prototype
    // otherwise when trying to call the new method it will be undefined b/c it's not a property, 
    // but is only on the prototype
    this.handleClick = this.handleClick.bind(this)

  }
  
  handleChange(e) {
    console.log(this.state)
    this.setState({
      input: e.target.value // REMEMBER THIS - e.target.value
    }) 
  }

  handleClick() {
    let newList = this.state.list.slice()
    newList.push(this.state.input)
    this.setState({
      list: newList
    })
  }

  render() {
  // let list = ['vacay', 'cheetoes', 'fingers'] - this 
  // was previously where state was declared, now in state
    return (
      <div className="App">
      <h1> Basic To-Do List </h1>
      <form onSubmit={this.handleClick}>
      <input onChange={this.handleChange} type="text" placeholder="new item"/>
      <button onClick={this.handleClick}> Add To List</button>
      </form>
       { this.state.list.map((todo, id) => {
         return (
         <div style={{borderBottom: '1px solid black',
                      color: 'red',
                      width: '250px',
                      margin: '0 auto'}}>
           <p> { todo } </p>
           </div>
         )
       }) }
       </div>
    );
  }
}

export default App;
