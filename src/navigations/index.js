import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import MainNav from './MainNav';

const RootNavigation = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
      {token ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default RootNavigation;