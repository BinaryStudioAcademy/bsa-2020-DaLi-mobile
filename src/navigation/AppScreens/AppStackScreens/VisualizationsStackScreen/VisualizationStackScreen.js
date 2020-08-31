import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {VisualizationsScreen, VisualizationScreen} from '../../../../screens';
import AppHeader from '../../AppHeader/AppHeader';

const VisualizationStack = createStackNavigator();

const VisualizationsStackScreen = () => {
  return (
    <VisualizationStack.Navigator
      initialRouteName="Visualizations"
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
      <VisualizationStack.Screen
        name="Visualizations"
        component={VisualizationsScreen}
        options={{headerTitle: 'Visualizations'}}
      />
      <VisualizationStack.Screen
        name="Visualization"
        component={VisualizationScreen}
        options={{headerTitle: null}}
      />
    </VisualizationStack.Navigator>
  );
};

export default VisualizationsStackScreen;
