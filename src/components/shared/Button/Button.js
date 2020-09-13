import React from 'react';
import PropTypes from 'prop-types';
import {Button as PaperButton, Text} from 'react-native-paper';
import styles from './styles';

const Button = (props) => {
  const {value, ...otherProps} = props;
  return (
    <PaperButton
      style={styles.buttonContainer}
      mode="contained"
      {...otherProps}>
      <Text style={styles.buttonValue}>{value}</Text>
    </PaperButton>
  );
};

Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
