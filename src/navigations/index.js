import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './AuthNav';
import MainNav from './MainNav';

const RootNavigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default RootNavigation;