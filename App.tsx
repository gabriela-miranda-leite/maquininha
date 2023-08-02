import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StorybookUIRoot from './.ondevice/Storybook';
import Config from 'react-native-config';
import {Text} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Text>oi</Text>
    </NavigationContainer>
  );
};

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
