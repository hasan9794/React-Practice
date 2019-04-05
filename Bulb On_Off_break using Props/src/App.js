import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./button"
import Image from "./image"
import { NONAME } from 'dns';

class App extends Component {
  constructor(){
    super()
    this.state ={
      switchOn : false
    }
  }

  handleClick(){
    this.setState({
      switchOn: !this.state.switchOn
    })
  }

  break(){
    this.setState({
      switchOn: "break"
    })
  }

  render() {
    return (
      <div className="App">
        { !this.state.switchOn && <Image 
          imgURL="https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg"
        /> }
        {this.state.switchOn === true && <Image 
          imgURL="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn"
        /> }
        
        {this.state.switchOn === "break" && <Image 
          imgURL="https://media.istockphoto.com/vectors/brokendown-light-bulb-vector-id164446736"
        /> }
        <Button 
          name="Switch ON/OFF"
          myClick = {this.handleClick.bind(this)}
        />
        <Button 
          name="Break"
          myClick={this.break.bind(this)}
        />
        
      </div>
    );
  }
}

export default App;
