import React from 'react';
import { NavLink } from 'react-router-dom';
import IssueCard from './IssueCard';
import SortIssuesButtons from './SortIssuesButtons';
import { Card } from 'reactstrap';

const IssuesList = props => {
  if(!props.issues) {
    return <h3>Loading issues...</h3>
  }

  return (
    <div>
      <SortIssuesButtons
          filterIssues={props.filterIssues} 
        />
      {props.issues.map( (issue, index) => {
        return (
          <div key={index} className="issue-box">
            <NavLink to={`/issues/${issue.id}`}>
              <Card>
              <IssueCard issue={issue}/>
              </Card>
            </NavLink>
          </div>
        )
      })}

    </div>

    );
}
 
export default IssuesList;