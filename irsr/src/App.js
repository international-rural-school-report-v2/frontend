import React from 'react';
import './App.css';
import LoginModal from './components/LoginModal';
import IssuesContainer from './components/IssuesContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>International Rural School Report</h1>
        <LoginModal buttonLabel="Login" />
        {/* <Login buttonLabel="Login" /> */}
        <IssuesContainer />
        
      </div>
    </Router>
  );
}

export default App;
