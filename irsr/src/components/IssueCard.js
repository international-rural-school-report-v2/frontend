import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const IssueCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.issue.name}</CardTitle>
          <CardSubtitle>{props.issue.org_id}</CardSubtitle>
          <CardText>{props.issue.comments}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
 
export default IssueCard;