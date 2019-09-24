import React from 'react';
import Main from "../Main";
import './App.css';
import 'whatwg-fetch';
import Intro from "../Intro";

class Index extends React.Component {

  
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tv Serious List</h1>
          <Intro/>
        </header>
        
        <Main/>
      </div>
    );
  }
}

export default Index;
