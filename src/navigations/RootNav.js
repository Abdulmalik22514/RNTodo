import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import Tabs from './AppStack';
import {useSelector} from 'react-redux';
import AppStack from './AppStack';

const RootNavigation = () => {
  // const {authToken} = useSelector(state => state.authReducer);

  return (
    <NavigationContainer>
      {/* {!authToken ? <AuthStack /> : <AppStack />} */}
      <AppStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
