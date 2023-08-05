import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Machines, MachineInfo} from '../screens';

export type RootStackParamList = {
  Machines: undefined;
  MachineInfo: {name: string};
};

const Navigation = createNativeStackNavigator<RootStackParamList>();

export const Routes: React.FC = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: false,
        headerTintColor: '#1E2047',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Navigation.Screen
        name="Machines"
        component={Machines}
        options={{headerShown: true, title: 'Maquininhas'}}
      />
      <Navigation.Screen
        name="MachineInfo"
        component={MachineInfo}
        options={{headerShown: true, title: 'T3 hehe'}}
      />
    </Navigation.Navigator>
  );
};
