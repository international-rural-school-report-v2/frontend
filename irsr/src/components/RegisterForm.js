import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { login, getOrgs, register } from '../actions';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidLogin: false,
      username: '',
      password: '',
      name: '',
      role_id: '',
      org_id: '',
    };
  }

  componentDidMount() {
    this.props.getOrgs();
  }

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = ev => {
    ev.preventDefault();
    // const credentials = {
    //   username: this.state.username,
    //   password: this.state.password
    // };
    const accountInfo = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      role_id: this.state.role_id,
      org_id: this.state.org_id,
      phone: this.state.phone,
      email: this.state.email
    }

    Promise.resolve(this.props.register(accountInfo)).then(() => {
      this.props.history.push('/issues')
    })
  };

  render() {
    if(!this.props.orgsFetched) {
      return <h1>Loading...</h1>
    }
    // onSubmit={ev => this.submitHandler(ev)
    return (
        <Form onSubmit={ev => this.submitHandler(ev)}>
          <h2>Register</h2>
          <FormGroup>
            <Label for="username-input-register">Username:</Label>
            <Input
              type='text'
              name='username'
              id="username-input"
              onChange={this.changeHandler}
            />
            <Label for='password-input'>Password:</Label>
            <Input
              id='password-input'
              type='password'
              name='password'
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
          <Label for="select-org">Select</Label>
          <Input type="select" name="org_id" id="select-org" onChange={this.changeHandler}>
            <option></option>
            {this.props.orgs.map( (item, index) => {
              return <option key={index} value={item.id}>{item.name}</option>
            })}
          </Input>
          </FormGroup>
          <FormGroup>
            <Label for='name-input'>Name:</Label>
            <Input
              id='name-input'
              type='text'
              name='name'
              onChange={this.changeHandler}
            />
            <Label for='phone-input'>Phone Number (optional):</Label>
            <Input
              id='phone-input'
              type='tel'
              name='phone'
              onChange={this.changeHandler}
            />
            <Label for='email-input'>Email (optional):</Label>
            <Input
              id='email-input'
              type='email'
              name='email'
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input 
                type="radio" 
                name="role_id"
                value={1}
                onClick={this.changeHandler}
              />{' '}
              School Admin
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input 
              type="radio" 
              name="role_id"
              value={2}
              onClick={this.changeHandler}
              />{' '}
              Board Member
            </Label>
          </FormGroup>
          <FormGroup>
            <Button
              className='login-btn'
              color="primary"
              type='submit'
              placeholder='Register'
              value='Register'
            >Register</Button>
          </FormGroup>
        </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    orgs: state.orgs,
    orgsFetched: state.orgsFetched
  }
};

export default connect(
  mapStateToProps,
  { login, getOrgs, register }
)(RegisterForm);