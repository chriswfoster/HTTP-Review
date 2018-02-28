import React, { Component } from 'react';
import './App.css';

//import AxiosRequestMachine component
import AxiosRequestMachine from './components/AxiosRequestMachine'

class App extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">HTTP Review</h1>
        </header>
        
          <AxiosRequestMachine />
      </div>
    );
  }
}

export default App;
