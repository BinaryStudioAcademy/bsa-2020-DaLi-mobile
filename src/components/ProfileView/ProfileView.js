import * as React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Button} from '../shared';
import styles from './styles';

const ProfileView = props => {
  const {onUserLogout} = props;
  return (
    <View style={styles.profileContainer}>
      <Button value="Logout" onPress={onUserLogout} />
    </View>
  );
};

ProfileView.propTypes = {
  onUserLogout: PropTypes.func,
};

export default ProfileView;
