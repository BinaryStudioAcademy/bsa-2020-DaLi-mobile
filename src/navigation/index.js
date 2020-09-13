import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AppScreens from './AppScreens';
import AuthScreens from './AuthScreens';
import {navigationService} from '../services';

const Navigation = () => {
  useEffect(() => {
    return () => {
      navigationService.isReadyRef.current = false;
    };
  }, []);
  const isAuthorized = useSelector((state) => state.currentUser.isAuthorized);
  return (
    <NavigationContainer
      ref={navigationService.navigationRef}
      onReady={() => {
        navigationService.isReadyRef.current = true;
      }}>
      {isAuthorized ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
};

export default Navigation;
