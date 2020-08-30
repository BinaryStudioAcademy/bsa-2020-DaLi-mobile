import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../../screens';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const AuthScreens = () => (
  <AuthStack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthScreens;
