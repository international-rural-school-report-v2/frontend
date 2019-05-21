import React from 'react';
import { Button } from 'reactstrap';

class SortIssuesButtons extends React.Component {

  render() { 
    return (
      <div className='sort-issues'>
        <Button onClick={() => this.props.filterIssues(1)}>
          Done</Button>
        <Button onClick={() => this.props.filterIssues(2)}>
          Scheduled</Button>
        <Button onClick={() => this.props.filterIssues(3)}>
          Open</Button>
        <Button onClick={() => this.props.filterIssues(4)}>
          Ignored</Button>
      </div>
    )
  }
} 
 
export default SortIssuesButtons;