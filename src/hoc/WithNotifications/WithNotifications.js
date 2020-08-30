import React from 'react';
import PropTypes from 'prop-types';
import {Loader, ErrorNotification, SuccessNotification} from '../../components';

const WithNotifications = Component => {
  return function WithNotificationsComponent(props) {
    const {isLoading, error, success, onDismiss, ...componentProps} = props;
    return isLoading ? (
      <Loader />
    ) : (
      <>
        <Component {...componentProps} />
        <ErrorNotification message={error} onDismiss={onDismiss} />
        <SuccessNotification message={success} onDismiss={onDismiss} />
      </>
    );
  };
};

WithNotifications.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
  onDismiss: PropTypes.func,
};

WithNotifications.defaultProps = {
  isLoading: false,
  error: null,
  success: null,
  onDismiss: () => {},
};

export default WithNotifications;
