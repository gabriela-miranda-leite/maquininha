import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StorybookUIRoot from './.ondevice/Storybook';
import Config from 'react-native-config';

import {Routes} from './src/routes';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#1ec677" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
