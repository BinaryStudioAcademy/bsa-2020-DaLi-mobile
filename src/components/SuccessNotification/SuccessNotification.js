import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Snackbar} from 'react-native-paper';
import styles from './styles';

const SuccessNotification = props => {
  const {message, onDismiss} = props;

  return (
    <Snackbar
      visible={message}
      style={styles.successNotification}
      onDismiss={onDismiss}
      action={{
        label: 'close',
        onPress: () => onDismiss,
      }}
      theme={{colors: {accent: '#adc6a4'}}}>
      <Text style={styles.successNotificationTitle}>Success! {'\n'}</Text>
      <Text style={styles.successNotificationMessage}>{message}</Text>
    </Snackbar>
  );
};

SuccessNotification.propTypes = {
  message: PropTypes.string,
  onDismiss: PropTypes.func,
};

SuccessNotification.defaultProps = {
  message: null,
  onDismiss: () => {},
};

export default SuccessNotification;
