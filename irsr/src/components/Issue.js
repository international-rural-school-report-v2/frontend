import React from 'react';
import UpdateIssueForm from './UpdateIssueForm';
import { Card, Button } from 'reactstrap';
import IssueCard from './IssueCard';

const Issue = props => {

  const issue = props.issues.find( issue => `${issue.id}` === props.match.params.id);

  if(!issue) {
    return <h2>Issue not found!</h2>
  }

  return (
    <Card>
      <IssueCard issue={issue} />
      <Button onClick={() => {
        props.deleteIssue(issue.id);
        props.history.push('/issues')
        }}>
        Delete Issue
        </Button>
      <UpdateIssueForm id={issue.id} />
    </Card>
  );
}
 
export default Issue;