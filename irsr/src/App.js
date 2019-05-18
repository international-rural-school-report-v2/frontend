import React from 'react';
import './App.css';
import Login from './components/Login'
import IssuesContainer from './components/IssuesContainer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>International Rural School Report</h1>
        <Login buttonLabel="Login" />
        <IssuesContainer />
        
      </div>
    </Router>
  );
}

export default App;
