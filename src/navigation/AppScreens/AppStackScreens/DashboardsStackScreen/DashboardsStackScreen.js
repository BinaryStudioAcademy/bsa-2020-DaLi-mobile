import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DashboardsScreen, DashboardScreen} from '../../../../screens';
import AppHeader from '../../AppHeader/AppHeader';

const DashboardsStack = createStackNavigator();

const DashboardsStackScreen = () => {
  return (
    <DashboardsStack.Navigator
      initialRouteName="Dashboards"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <AppHeader
            scene={scene}
            previous={previous}
            navigation={navigation}
          />
        ),
      }}>
      <DashboardsStack.Screen
        name="Dashboards"
        component={DashboardsScreen}
        options={{headerTitle: 'Dashboards'}}
      />
      <DashboardsStack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{headerTitle: null}}
      />
    </DashboardsStack.Navigator>
  );
};

export default DashboardsStackScreen;
