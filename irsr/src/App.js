import React from 'react';
import './App.css';
import LoginModal from './components/LoginModal';
import IssuesContainer from './components/IssuesContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import RegisterForm from './components/RegisterForm';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>International Rural School Report</h1>
        <LoginModal buttonLabel="Login" />
        {/* <Login buttonLabel="Login" /> */}
        <RegisterForm />


        <PrivateRoute exact path="/issues" component={IssuesContainer} />
      </div>
      <button onClick={() => window.localStorage.clear()}>Logout</button>
    </Router>
  );
}

export default App;
