import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import Header from './components/Header.js';
import IssuesContainer from './components/IssuesContainer';
import Footer from './components/Footer.js';
import TeacherAttendance from './pageviews/TeacherAttendance.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PrivateRoute from './PrivateRoute';

/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/
const GlobalStyle = createGlobalStyle`
	html,
	body,
	#root {
      box-sizing: border-box;
      margin: 0 auto;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
	}
`;

const DivPageView = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />
        <div className='main-page'>
          <NavBar />
          <DivPageView>
            <Route path='/login' render={props =>
              <div>
                <LoginForm {...props} />
                {/* <LoginModal buttonLabel='Login' component={LoginForm} /> */}
                {/* <LoginModal buttonLabel='Register' component={RegisterForm} /> */}
                <RegisterForm {...props} />
              </div>
            } />
            <PrivateRoute path='/issues' component={IssuesContainer} />
            <PrivateRoute exact path='/teacher-attendance' component={TeacherAttendance} />
          </DivPageView>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
