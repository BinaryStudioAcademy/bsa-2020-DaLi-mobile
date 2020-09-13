import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {WithNotifications} from '../../hoc';
import {LoginView} from '../../components';

const LoginViewWithNotifications = WithNotifications(LoginView);

const LoginContainer = props => {
  const {
    loginUser,
    error,
    resetAuthNotifications,
    token,
    fetchUser,
    isLoading,
  } = props;

  useEffect(() => {
    if (token) {
      fetchUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoginViewWithNotifications
      isLoading={isLoading}
      error={error}
      onDismiss={resetAuthNotifications}
      onLoginSubmit={loginUser}
    />
  );
};

const mapStateToProps = ({currentUser}) => ({
  isLoading: currentUser?.isLoading,
  error: currentUser?.error,
  token: currentUser.token,
});

const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
