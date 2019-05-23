import React from 'react';
import UpdateIssueForm from './UpdateIssueForm';
import { Card } from 'reactstrap';
import IssueCard from './IssueCard';
import DeleteIssueModal from './DeleteIssueModal';
import '../styles/issues-container.css';

const Issue = props => {

  const issue = props.issues.find( issue => `${issue.id}` === props.match.params.id);

  if(!issue) {
    return <h2>Issue not found!</h2>
  }

  const deleteIssue = ev => {
    ev.preventDefault();
    props.deleteIssue(issue.id);
    props.history.push('/issues');
  }

  if(issue.status_id === 1 || issue.status_id === 4 ) {
    return (
      <Card className='single-issue-card'>
        <IssueCard issue={issue} />
        <UpdateIssueForm issueId={issue.id} />
      </Card>
    )
  }

  return (
    <Card className='single-issue-card'>
      <IssueCard issue={issue} />

      {/* <FormGroup>
        <Button 
          color='danger' 
          className='login-btn'
          type='submit'
          placeholder='Delete Issue'
          value='Delete Issue'
          onClick={ev => {
          ev.preventDefault();
          props.deleteIssue(issue.id);
          props.history.push('/issues');
          }}>
          Delete Issue
        </Button>
      </FormGroup> */}
      <DeleteIssueModal deleteIssue={deleteIssue} />
      <UpdateIssueForm issueId={issue.id} />
    </Card>
  );
}
 
export default Issue;