import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from './Login.js';
import {HomeScreen} from './HomeScreen.js';
import {CariData} from './CariData.js';
import {DaftarScreen} from './DaftarScreen.js';
import {TambahData} from './TambahData.js';

const Stack = createStackNavigator();

export const AppNavigator = () =>  {
  return (
    <Stack.Navigator initialRouteName='login' screenOptions={{headerShown:false}}>
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="cari" component={CariData} />
        <Stack.Screen name="tambah" component={TambahData} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="daftar" component={DaftarScreen} />
    </Stack.Navigator>
  );
}