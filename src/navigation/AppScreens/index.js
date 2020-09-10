import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {ProfileScreen} from '../../screens';
import {AnalyticsStackScreen} from './AppStackScreens';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Visualizations"
      shifting={true}
      sceneAnimationEnabled={false}
      activeColor="#ffffff"
      inactiveColor="#afaeaf"
      barStyle={styles.barStyle}>
      <Tab.Screen
        name="Analytics"
        component={AnalyticsStackScreen}
        options={{
          tabBarIcon: 'chart-timeline-variant',
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: 'account',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#5ed2a2',
  },
});

export default BottomTabs;
