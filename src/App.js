import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Sample React form</h1>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h2>React Form Validation Demo</h2> */}
        </div>
        <Form />
        <h4>
          {/* From <a style={{textDecoration: 'underline'}} href="https://learnetto.com/users/hrishio/courses/the-complete-react-on-rails-5-course">The Complete React on Rails Course</a> */}
        </h4>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
