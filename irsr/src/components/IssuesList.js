import React from 'react';
import { NavLink } from 'react-router-dom';
import IssueCard from './IssueCard';
import SortIssuesButtons from './SortIssuesButtons';
import { Card } from 'reactstrap';
import AddIssueModal from './AddIssueModal';

const IssuesList = props => {

  if(!props.issues || !Array.isArray(props.issues)) {
    return <h3>Loading issues...</h3>
  }

  return (
    <div className='issues-container-with-buttons'>
      <AddIssueModal />
      <SortIssuesButtons
          filterIssues={props.filterIssues} 
        />
      <div className='issues-list'>
        {props.issues.map( (issue, index) => {
          return (
            <Card key={index} className='issues-list-card'>
            <NavLink to={`/issues/${issue.id}`}>
              <IssueCard issue={issue} />
            </NavLink>
            </Card>
          )
          })}
      </div>

    </div>

    );
}
 
export default IssuesList;