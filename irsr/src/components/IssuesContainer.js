import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Issue from './Issue';
import IssuesList from './IssuesList'

class IssuesContainer extends React.Component {


  render() { 
    return (
      <div>
        <p>issues container</p>
        <IssuesList issues={this.props.issues} />
        
        <Route
          path='/issues/:id'
          render={props => (
            <Issue {...props} issues={this.props.issues}
            />
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
  {}
)(IssuesContainer);