import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const IssueCard = props => {

  let statusID = '';
  switch(props.issue.status_id){
    case 1:
      statusID = 'Done';
      break;
    case 2: 
      statusID = 'Scheduled';
      break;
    case 3:
      statusID = 'Open';
      break;
    case 4:
      statusID = 'Ignored';
      break;
  }

  return (
      <>
        <CardBody>
          <CardTitle>{props.issue.name}</CardTitle>
          <CardSubtitle>{props.issue.org_name}</CardSubtitle>
          <CardText>{props.issue.comments}</CardText>
          <CardText>Status: {statusID}</CardText>
          <CardText>Created at: {props.issue.created_at}<br />
                    Updated at: {props.issue.updated_at}
          </CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </>
  );
}
 
export default IssueCard;