import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Machines, MachineInfo} from '../screens';
import {Icons} from '../components/';
import {defaultTheme} from '../theme';

export type RootStackParamList = {
  Machines: undefined;
  MachineInfo: {name: string; id: string};
};

const Navigation = createNativeStackNavigator<RootStackParamList>();

export const Routes: React.FC = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        headerLeft: () => <Icons type="ListBullets" />,
        headerRight: () => <Icons type="Question" />,
        headerShown: true,
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
        options={{title: 'Maquininhas'}}
      />
      <Navigation.Screen
        name="MachineInfo"
        component={MachineInfo}
        options={({route}) => ({title: route?.params?.name ?? 'Maquininha'})}
      />
    </Navigation.Navigator>
  );
};
