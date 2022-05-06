import Counters from './Components/counters';
import NavBar from './Components/NavBar';
import './App.css';
import React, { Component } from 'react';
import counters from './Components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    console.log("reset called");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render(){
   
    return (
    <React.Fragment>
      <NavBar totalcounters={this.state.counters.filter(c => c.value > 0).length}/>
    <main className="container">
      <Counters 
      counters = {this.state.counters}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      onReset={this.handleReset}/>
    </main>
    </React.Fragment>
    
  );
  }
  
}

export default App;
