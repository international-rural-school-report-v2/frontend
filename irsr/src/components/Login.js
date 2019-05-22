import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import '../styles/issues-container.css';

const Login = props => {
  return (
    <div className='login-page'>
      <LoginForm {...props} />
      <RegisterForm {...props} />
    </div>
    );
}
 
export default Login;