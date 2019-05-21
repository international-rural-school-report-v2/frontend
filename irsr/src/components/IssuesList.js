import React from 'react';
import { NavLink } from 'react-router-dom';
import IssueCard from './IssueCard';

const IssuesList = props => {
  if(!props.issues) {
    return <h3>Loading issues...</h3>
  }
  return (
    <div>
      {props.issues.map( (issue, index) => {
        return (
          <div key={index} className="issue-box">
            <NavLink to={`/issues/${issue.id}`}>
              <IssueCard issue={issue}/>
            </NavLink>
          </div>
        )
      })}

    </div>

    );
}
 
export default IssuesList;