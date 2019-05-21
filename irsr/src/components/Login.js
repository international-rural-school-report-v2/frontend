import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Login = props => {
  return (
    <div className='login-page'>
      <LoginForm />
      <RegisterForm />
    </div>
    );
}
 
export default Login;