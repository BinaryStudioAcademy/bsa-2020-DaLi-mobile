import React from 'react';
import {LoginView} from '../../components';

const LoginContainer = () => {
  const onLoginSubmit = values => console.log(values);
  return <LoginView onLoginSubmit={onLoginSubmit} />;
};

export default LoginContainer;
