import React, { Component } from 'react';
import './App.css';
import Project from './components/project/Project';
//import axios from 'axios';
class App extends Component {
  state = {

    "studyType": ["None","US", "X-RAY", "CT", "MRI"],
    "userList":["soumya","narendra", "vinay", "john", "tom", "vijay", "tommy","sam","nick","neon"]
  }
  componentWillMount() {

  }
  render() {
    console.log(Project);
    return (
      <div className="App">
        <Project projectSharingProps = {this.state.userList} infoProps={this.state["studyType"]}></Project>
      </div>
    );
  }
}

export default App;
