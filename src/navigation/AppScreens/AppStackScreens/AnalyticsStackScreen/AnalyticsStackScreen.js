import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CollectionsScreen,
  CollectionScreen,
  DashboardScreen,
  VisualizationScreen,
} from '../../../../screens';
import AppHeader from '../../AppHeader/AppHeader';

const AnalyticsStack = createStackNavigator();

const AnalyticsStackScreen = () => {
  return (
    <AnalyticsStack.Navigator
      initialRouteName="Collections"
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
      <AnalyticsStack.Screen
        name="Collections"
        component={CollectionsScreen}
        options={{headerTitle: 'Collections'}}
      />
      <AnalyticsStack.Screen
        name="Collection"
        component={CollectionScreen}
        options={{headerTitle: 'Collection'}}
      />
      <AnalyticsStack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{headerTitle: 'Dashboard'}}
      />
      <AnalyticsStack.Screen
        name="Visualization"
        component={VisualizationScreen}
        options={{headerTitle: 'Visualization'}}
      />
    </AnalyticsStack.Navigator>
  );
};

export default AnalyticsStackScreen;
