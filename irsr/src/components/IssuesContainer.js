import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Issue from './Issue';
import IssuesList from './IssuesList'
import AddIssueForm from './AddIssueForm';
import { getIssues, login, register } from '../actions';
import LoginModal from './LoginModal';
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm';
import Login from './Login';


class IssuesContainer extends React.Component {

  componentDidMount() {
    this.props.getIssues();
  }

  render() {
    console.log(this.props.issues)
    return (
      <div>
        <AddIssueForm />
        {/* <LoginModal 
          buttonSubmit={this.props.login} 
          buttonSubmitMessage='Login' 
          buttonLabel="Login"
          />
        <LoginModal 
          buttonSubmit={this.props.register} 
          buttonSubmitMessage='Register' 
          buttonLabel="Register"
        /> */}
        <p>issues container</p>
        <Route
          exact
          path='/issues'
          render={props => (
            <IssuesList {...props} issues={this.props.issues}
            />
          )}
        />
        <Route
          path='/issues/:id'
          render={props => (
            <Issue {...props} issues={this.props.issues}
            />
          )}
        />
        <Route
          exact
          path='/login'
          render={props => (
            <Login />
          )}
        />
      </div>
      );
  }

  
}

const mapStateToProps = state => ({
  issues: state.issues
});

export default connect(
  mapStateToProps,
  { getIssues, login, register }
)(IssuesContainer);