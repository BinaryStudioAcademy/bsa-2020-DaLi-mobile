import React from 'react';
import {Title} from 'react-native-paper';
import {View} from 'react-native';
import styles from './styles';

const DashboardView = ({dashboard}) => (
  <View style={styles.dashboardContainer}>
    <Title>{dashboard?.name}</Title>
  </View>
);

export default DashboardView;
