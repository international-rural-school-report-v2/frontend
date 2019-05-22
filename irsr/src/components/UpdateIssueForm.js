import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { addIssue, updateIssue } from '../actions';
import '../styles/issues-container.css';

class UpdateIssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = ev => {
    ev.preventDefault();
    const newIssue = {
      name: this.state.issueName,
      comments: this.state.issueComments,
      status_id: this.state.status_id
    };
    Promise.resolve(this.props.updateIssue(newIssue, this.props.issueId))
    // .then(() => {
      // if (this.props.isLoggedIn) {
      //   this.props.closeLoginModal(ev);
      // } else {
    //   console.log('this.props.isLoggedIn() = ', this.props.isLoggedIn);
    //   this.setState({ invalidLogin: true });
    //   // }
    // });
  };


  render() {
    return (
      <Form className='single-issue-form' onSubmit={ev => this.submitHandler(ev)}>
          <h2>Update Issue</h2>
          <FormGroup>
            <Label for="issue-name-input-update">Issue Name:</Label>
            <Input
              type='text'
              name='issueName'
              id="issue-name-input-update"
              onChange={this.changeHandler}
            />
  
            <Label for='issue-comments-input-update'>Comment:</Label>
            <Input
              id='issue-comments-input-update'
              type='text'
              name='issueComments'
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
          <Label for="status-id-update">Issue Status:</Label>
          <Input type="select" name="status_id" id="status-id-update" onChange={this.changeHandler}>
            <option></option>
            <option value={1}>Done</option>
            <option value={2}>Scheduled</option>
            <option value={3}>Open</option>
            <option value={4}>Ignored</option>
          </Input>
          </FormGroup>
          <FormGroup>
            <Button
              className='login-btn'
              color="primary"
              type='submit'
              placeholder='Update Issue'
              value='Update Issue'
            >Update Issue</Button>
            {/* <p failedLogin={this.state.invalidLogin.toString()}>
              Invalid Username/Password
            </p> */}
          </FormGroup>
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
  { addIssue, updateIssue }
)(UpdateIssueForm);