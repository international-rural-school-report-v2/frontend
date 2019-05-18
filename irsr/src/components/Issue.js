import React from 'react';


const Issue = props => {

  const issue = props.issues.find( issue => `${issue.id}` === props.match.params.id);

  return (
    <div className="issue">
      <h3>{issue.title}</h3>
      <p>{issue.description}</p>
    </div>

  );
}
 
export default Issue;