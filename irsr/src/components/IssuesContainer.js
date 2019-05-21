import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Issue from './Issue';
import IssuesList from './IssuesList'
import AddIssueForm from './AddIssueForm';
import SortIssuesButtons from './SortIssuesButtons';
import { getIssues, login, register, filterIssues } from '../actions';


class IssuesContainer extends React.Component {

  componentDidMount() {
    this.props.getIssues(this.props.org_id);
  }

  render() {
    console.log(this.props.issues)
    return (
      <div>
        <Route
          exact
          path='/issues'
          render={props => (
            <AddIssueForm {...props} issues={this.props.issues}
            />
          )}
        />
        <p>issues container</p>
        <SortIssuesButtons
          filterIssues = {this.props.filterIssues} 
        />
        <Route
          exact
          path='/issues'
          render={props => (
            <IssuesList {...props} issues={this.props.displayedIssues}
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
        {/* <Route
          exact
          path='/login'
          render={props => (
            <Login />
          )}
        /> */}
      </div>
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
  { getIssues, login, register, filterIssues }
)(IssuesContainer);