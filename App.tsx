import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StorybookUIRoot from './.ondevice/Storybook';
import Config from 'react-native-config';

import {Routes} from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
