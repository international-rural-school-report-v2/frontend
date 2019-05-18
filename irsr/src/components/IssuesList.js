import React from 'react';
import { NavLink } from 'react-router-dom';

const IssuesList = props => {
  return (
    <div>
      {props.issues.map( (issue, index) => {
        return (
          <div className="issue-box">
            <NavLink to={`/issues/${issue.id}`}>
              <h3>{issue.title}{index+1}</h3>
            </NavLink>
          </div>
        )
      })}

    </div>

    );
}
 
export default IssuesList;