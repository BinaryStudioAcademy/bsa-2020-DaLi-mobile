import * as React from 'react';
import {Avatar, List} from 'react-native-paper';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Button} from '../shared';
import styles from './styles';

const ProfileView = (props) => {
  const {initials, firstName, lastName, email, onUserLogout} = props;
  return (
    <View style={styles.profileContainer}>
      <Avatar.Text
        style={styles.profileAvatar}
        size={55}
        color="#ffffff"
        label={initials}
      />
      <List.Section>
        <List.Subheader style={styles.profileTitle}>Profile</List.Subheader>
        <List.Item
          style={styles.profileItem}
          title={firstName}
          description="First name"
        />
        <List.Item
          style={styles.profileItem}
          title={lastName}
          description="Last name"
        />
        <List.Item
          style={styles.profileItem}
          title={email}
          description="Email"
        />
      </List.Section>
      <Button
        value="Log out"
        onPress={onUserLogout}
        style={styles.profileLogoutButton}
      />
    </View>
  );
};

ProfileView.propTypes = {
  onUserLogout: PropTypes.func,
};

export default ProfileView;
