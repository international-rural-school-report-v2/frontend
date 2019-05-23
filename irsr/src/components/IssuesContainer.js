import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Issue from './Issue';
import IssuesList from './IssuesList'
import { getIssues, login, register, filterIssues, deleteIssue } from '../actions';
import { Container } from 'reactstrap';
import '../styles/issues-container.css';


class IssuesContainer extends React.Component {

  componentDidMount() {
    this.props.getIssues(this.props.org_id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.issues !== this.props.issues || prevProps.displayIssues !== this.props.displayIssues) {
      this.setState({
        issues: this.props.issues,
        org_id: this.props.org_id,
        displayedIssues: this.props.displayedIssues
      })
    }
  };

  render() {
    return (
      <Container className='issues-container'>
        <Route
          exact
          path='/issues'
          render={props => (
            <IssuesList {...props} 
            filterIssues={this.props.filterIssues}
            issues={this.props.displayedIssues}
            />
          )}
        />
        <Route
          exact
          path='/issues/:id'
          render={props => (
            <Issue {...props} 
              issues={this.props.issues}
              deleteIssue={this.props.deleteIssue}
            />
          )}
        />
        {/* <Route
          exact
          path='/login'
          render={props => (
            <Login />
          )}
        /> */}
      </Container>
      );
  }

  
}

const mapStateToProps = state => ({
  issues: state.issues,
  org_id: state.org_id,
  displayedIssues: state.displayedIssues
});

export default connect(
  mapStateToProps,
  { getIssues, login, register, filterIssues, deleteIssue }
)(IssuesContainer);