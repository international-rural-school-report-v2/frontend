import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { addIssue } from '../actions';

class AddIssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issueName: '',
      issueComments: '',
      status_id: ''
    };
  }

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = ev => {
    ev.preventDefault();
    const newIssue = {
      'name': this.state.issueName,
      'comments': this.state.issueComments,
      'status_id': this.state.status_id
    };
    
    this.props.addIssue(newIssue)
  };


  render() {
    return (
      <Form onSubmit={ev => this.submitHandler(ev)}>
          <h2>Submit Issue</h2>
          <div>
            <Label for="issue-name-input">Issue Name:</Label>
            <Input
              type='text'
              name='issueName'
              id="issue-name-input"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <Label for='issue-comments-input'>Comment:</Label>
            <Input
              id='issue-comments-input'
              type='text'
              name='issueComments'
              onChange={this.changeHandler}
            />
          </div>
          <Input type="select" name="status_id" id="status-id" onChange={this.changeHandler}>
            <option></option>
            <option value={1}>Done</option>
            <option value={2}>Scheduled</option>
            <option value={3}>Open</option>
            <option value={4}>Ignored</option>
          </Input>
          <div>
            <Button
              className='login-btn'
              color="primary"
              type='submit'
              placeholder='Submit Issue'
              value='Submit Issue'
            >Submit Issue</Button>
            {/* <p failedLogin={this.state.invalidLogin.toString()}>
              Invalid Username/Password
            </p> */}
          </div>
        </Form>

      );
  }
}
 
const mapStateToProps = state => {
  return {
    org_id: state.org_id
  }
};

export default connect(
  mapStateToProps,
  { addIssue }
)(AddIssueForm);