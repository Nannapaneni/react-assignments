import React, { Component } from 'react';
import './App.css';
import Project from './components/project/Project';
class App extends Component {
  render() {
    console.log(Project);
    return (
      <div className="App">
       <Project></Project>
      </div>
    );
  }
}

export default App;
