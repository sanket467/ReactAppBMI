import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopDiv from './TopDiv';
import CenterContent from './CenterContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopDiv />
        <div className="row">
          <div className="col-12">
          <br></br>
          </div>
          <div className="col-2">
          </div>

          <div style={{ padding: 10, backgroundColor: "aliceblue", border: "2px" }} className="container col-8">
            <CenterContent />
          </div>

          <div className="col-2">
          </div>
        </div>

      </div>
    );
  }
}

export default App;
