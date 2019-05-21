import React from 'react';
import UpdateIssueForm from './UpdateIssueForm';
import { Card } from 'reactstrap';
import IssueCard from './IssueCard';

const Issue = props => {

  const issue = props.issues.find( issue => `${issue.id}` === props.match.params.id);

  if(!issue) {
    return <h2>Issue not found!</h2>
  }

  return (
    <Card>
      <IssueCard issue={issue} />
      <UpdateIssueForm id={issue.id} />
    </Card>

  );
}
 
export default Issue;