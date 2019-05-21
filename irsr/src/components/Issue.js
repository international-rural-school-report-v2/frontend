import React from 'react';
import UpdateIssueForm from './UpdateIssueForm';


const Issue = props => {

  const issue = props.issues.find( issue => `${issue.id}` === props.match.params.id);

  if(!issue) {
    return <h2>Issue not found!</h2>
  }

  return (
    <div className="issue">
      <h3>{issue.name}</h3>
      <p>{issue.comments}</p>
      <UpdateIssueForm id={issue.id} />
    </div>

  );
}
 
export default Issue;