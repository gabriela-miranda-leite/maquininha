import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StorybookUIRoot from './.ondevice/Storybook';
import Config from 'react-native-config';

import {Card, Info} from './src/components';
import database from '@react-native-firebase/database';

const App = () => {
  database()
    .ref('/machines')
    .on('value', snapshot => {
      console.log('User data: ', snapshot.val());
    });

  return (
    <NavigationContainer>
      <Card title="Maquininha T1" description="À partir de 12x de R$ 1,90" />
      <Info description="testando hehe" icon="wifi" />
    </NavigationContainer>
  );
};

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
