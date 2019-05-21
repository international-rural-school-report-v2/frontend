import React from 'react';
import './App.css';
import LoginModal from './components/LoginModal';
import IssuesContainer from './components/IssuesContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='main-page'>
          <h1>International Rural School Report</h1>
          

          <Route path='/login' render={props =>
            <div>
              <LoginForm {...props} />
              {/* <LoginModal buttonLabel='Login' component={LoginForm} /> */}
              {/* <LoginModal buttonLabel='Register' component={RegisterForm} /> */}
              <RegisterForm {...props} />
            </div>
          } />
          <PrivateRoute path='/issues' component={IssuesContainer} />
        </div>
      </div>
      <button onClick={() => window.localStorage.clear()}>Logout</button>
    </Router>
  );
}

export default App;
