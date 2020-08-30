import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import styles from './styles';

const Loader = () => (
  <ActivityIndicator style={styles.loader} size="large" animating={true} />
);

export default Loader;
