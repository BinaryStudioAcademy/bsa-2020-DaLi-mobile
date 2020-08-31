import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {DashboardsScreen, ProfileScreen} from '../../screens';
import {VisualizationsStackScreen} from './AppStackScreens';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Visualizations"
      shifting={true}
      sceneAnimationEnabled={false}
      activeColor="#ffffff"
      inactiveColor="#bbc0c2"
      barStyle={styles.barStyle}>
      <Tab.Screen
        name="Visualizations"
        component={VisualizationsStackScreen}
        options={{
          tabBarIcon: 'chart-timeline-variant',
        }}
      />
      <Tab.Screen
        name="Dashboards"
        component={DashboardsScreen}
        options={{
          tabBarIcon: 'view-dashboard',
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
    backgroundColor: '#519ee3',
  },
});

export default BottomTabs;
