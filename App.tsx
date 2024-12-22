import './global.css';

import 'react-native-gesture-handler';

import { TabNavigation } from '@components/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes';

export default function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" />
        <Routes />
        <TabNavigation />
      </NavigationContainer>
    </>
  );
}
