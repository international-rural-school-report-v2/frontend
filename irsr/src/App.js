import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import Header from './components/Header.js';
import IssuesContainer from './components/IssuesContainer';
import Footer from './components/Footer.js';
import TeacherAttendance from './pageviews/TeacherAttendance.js';
import LandingPage from './pageviews/LandingPage.js';
import TeamPage from './pageviews/TeamPage.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';

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
const App = props => {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        {props.isLoggedIn && <Route
          path='/'
          render={props => (
            <Header {...props} />
          )}
        />}
        {!props.isLoggedIn && <Route exact path='/' component={LandingPage} />}
        {!props.isLoggedIn && <Route exact path='/team' component={TeamPage} />}
        <div className='main-page'>
          {props.isLoggedIn && <NavBar />}
          <DivPageView>
            <Route
              path='/login'
              render={props => (
                <Login {...props} />
              )}
            />
            <PrivateRoute
              path='/issues'
              component={IssuesContainer}
            />
            <PrivateRoute exact path='/teacher-attendance' component={TeacherAttendance} />
          </DivPageView>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
};

export default connect(
  mapStateToProps,
  {}
)(App);
