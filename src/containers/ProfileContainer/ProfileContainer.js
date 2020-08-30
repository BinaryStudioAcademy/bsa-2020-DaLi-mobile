import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../LoginContainer/actions';
import {WithNotifications} from '../../hoc';
import {ProfileView} from '../../components';

const ProfileViewWithNotifications = WithNotifications(ProfileView);

const LoginContainer = props => {
  const {isLoading, logoutUser: onUserLogout} = props;

  return (
    <ProfileViewWithNotifications
      isLoading={isLoading}
      onUserLogout={onUserLogout}
    />
  );
};

const mapStateToProps = ({currentUser}) => ({
  isLoading: currentUser.isLoading,
});

const mapDispatchToProps = {logoutUser};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
