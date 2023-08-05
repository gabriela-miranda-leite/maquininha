import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Machines, MachineInfo} from '../screens';
import {Icons} from '../components/';
import {defaultTheme} from '../theme';

export type RootStackParamList = {
  Machines: undefined;
  MachineInfo: {name: string};
};

const Navigation = createNativeStackNavigator<RootStackParamList>();

export const Routes: React.FC = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        headerLeft: () => <Icons type="ListBullets" />,
        headerRight: () => <Icons type="Question" />,
        headerShown: false,
        headerStyle: {backgroundColor: `${defaultTheme.colors.primary}`},
        headerTintColor: `${defaultTheme.colors.white}`,
        headerTitleAlign: 'center',
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
