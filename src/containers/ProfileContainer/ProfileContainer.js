import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../LoginContainer/actions';
import {WithNotifications} from '../../hoc';
import {ProfileView} from '../../components';
import {getUserInitials} from './helper';

const ProfileViewWithNotifications = WithNotifications(ProfileView);

const LoginContainer = props => {
  const {
    isLoading,
    firstName,
    lastName,
    email,
    logoutUser: onUserLogout,
  } = props;

  const userInitials = getUserInitials(firstName, lastName);

  return (
    <ProfileViewWithNotifications
      isLoading={isLoading}
      onUserLogout={onUserLogout}
      initials={userInitials}
      firstName={firstName}
      lastName={lastName}
      email={email}
    />
  );
};

const mapStateToProps = ({currentUser}) => ({
  isLoading: currentUser.isLoading,
  firstName: currentUser.user?.firstName,
  lastName: currentUser.user?.lastName,
  email: currentUser.user?.email,
});

const mapDispatchToProps = {logoutUser};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
