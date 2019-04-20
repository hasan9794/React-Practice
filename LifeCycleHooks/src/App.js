import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kid from "./components/kid";
import Teacher from "./components/teacher"
import Judge from "./components/judge"

class App extends Component {
  constructor(){  
    super()
    this.state ={
      volume: 0,
    }
    this.updateSteps = this.updateSteps.bind(this)
    this.taliBaja = this.taliBaja.bind(this)
  }
  static getDerivedStateFromProps(){
    return {volume: 5}
  }

  updateSteps(steps){
    console.log('steps ===>', steps)
    this.setState({
      furtherSteps: steps
    })
    console.log("updated ==>>" ,this.state.furtherSteps)
  
  }

  taliBaja(){
    this.setState({
      applaud: true
    })

    console.log("Baj gae bhosdike")
  }

  render() {
    const {volume, furtherSteps} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Kid furtherSteps={furtherSteps} dressColor="blue" />
          <Teacher updateSteps={this.updateSteps} />
          <Judge taliBaja={this.taliBaja}/>
        </header>
      </div>
    );
  }
}

export default App;
