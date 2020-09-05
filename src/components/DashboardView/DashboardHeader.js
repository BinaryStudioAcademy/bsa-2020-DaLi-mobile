import React from 'react';
import {Title, Subheading} from 'react-native-paper';
import {View} from 'react-native';
import styles from './styles';

const DashboardHeader = (props) => {
  const {dashboardName, dashboardDescription} = props;
  return (
    <View style={styles.dashboardHeader}>
      <Title style={styles.dashboardHeaderName}>{dashboardName}</Title>
      <Subheading style={styles.dashboardHeaderDescription}>
        {dashboardDescription}
      </Subheading>
    </View>
  );
};

export default DashboardHeader;
