import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/home';
import Sleep from '../pages/sleep';

const Main = createStackNavigator();

const MainRoutes: React.FC = () => {
  return (
    <Main.Navigator
      initialRouteName="Sleep"
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Home" component={Home} />
      <Main.Screen name="Sleep" component={Sleep} />
    </Main.Navigator>
  );
};

export default MainRoutes;
