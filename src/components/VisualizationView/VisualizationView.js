import React from 'react';
import {Title} from 'react-native-paper';
import {View} from 'react-native';
import styles from './styles';

const VisualizationView = ({visualization}) => (
  <View style={styles.visualizationContainer}>
    <Title>{visualization?.name}</Title>
  </View>
);

export default VisualizationView;
