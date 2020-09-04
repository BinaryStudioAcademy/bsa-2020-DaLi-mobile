import React from 'react';
import PropTypes from 'prop-types';
import {Snackbar} from 'react-native-paper';
import {Text} from 'react-native';
import styles from './styles';

const ErrorNotification = (props) => {
  const {message, onDismiss} = props;

  return (
    <Snackbar
      visible={message}
      style={styles.errorNotification}
      onDismiss={onDismiss}
      action={{
        label: 'close',
        onPress: () => onDismiss,
      }}
      theme={{colors: {accent: '#c99a96'}}}>
      <Text style={styles.errorNotificationTitle}> Error! {'\n'} </Text>
      <Text style={styles.errorNotificationMessage}>{message}</Text>
    </Snackbar>
  );
};

ErrorNotification.propTypes = {
  message: PropTypes.string,
  onDismiss: PropTypes.func,
};

ErrorNotification.defaultProps = {
  message: null,
  onDismiss: () => {},
};

export default ErrorNotification;
