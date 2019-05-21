import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidLogin: false,
      username: '',
      password: ''
    };
  }

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = ev => {
    ev.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    Promise.resolve(this.props.login(credentials)).then(() => {
      // if (this.props.isLoggedIn) {
      //   this.props.closeLoginModal(ev);
      // } else {
      console.log('this.props.isLoggedIn() = ', this.props.isLoggedIn);
      this.setState({ invalidLogin: true });
      // }
    });
  };

  render() {
    return (
      // <div onClick={ev => ev.stopPropagation()}>
        <Form onSubmit={ev => this.submitHandler(ev)}>
          <h2>Login</h2>
          <div>
            <Label for="username-input-login">Username:</Label>
            <Input
              type='text'
              name='username'
              id="username-input-login"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <Label for='password-input-login'>Password:</Label>
            <Input
              id='password-input-login'
              type='password'
              name='password'
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <Button
              className='login-btn'
              color="primary"
              type='submit'
              placeholder='Login'
              value='Log In'
            >Log In </Button>
            {/* <p failedLogin={this.state.invalidLogin.toString()}>
              Invalid Username/Password
            </p> */}
          </div>
        </Form>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
};

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);