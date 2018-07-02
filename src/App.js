import React, { Component } from 'react';
import './App.css';
import Users from './users';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      isRunning: false,
      error: null,
      userInput: ''
    }
  }//constructor

  componentDidMount(){
    fetch('data.json').then(res => res.json())
    .then(response => this.setState({
      users: response.results,
      isRunning: true
    }),//setState
    error => this.setState({isRunning: true, error})
  )//.then
}//componentDidMount

getUserinput = (val) => {
  this.setState({userInput: val.toLowerCase()});
  //console.log(val);
}//getUserinput

render() {

  return (
    <Users state={this.state} getUserinput={this.getUserinput}/>
  );

} //render

}
export default App;
