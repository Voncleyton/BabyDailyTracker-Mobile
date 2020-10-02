import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import Routes from './routes';
import {StatusBar} from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#ef6969" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
