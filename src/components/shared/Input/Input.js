import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, Text} from 'react-native-paper';
import {View} from 'react-native';
import styles from './styles';

const Input = (props) => {
  const {label, isError, errors, ...otherProps} = props;
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputHeader}>
        <Text style={styles.inputLabel}>{label}</Text>
        {isError && <Text style={styles.inputError}>{errors}</Text>}
      </View>
      <TextInput
        mode="outlined"
        error={isError}
        selectionColor="#707070"
        {...otherProps}
      />
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  isError: PropTypes.string,
  errors: PropTypes.string,
};

export default Input;
