import React from 'react';
import LoginModal from './LoginModal';

const Login = props => {
  return (
    <div className='login-page'>
      <LoginModal buttonLabel="Login" />
      <LoginModal buttonLabel="Register" />
    </div>
    );
}
 
export default Login;