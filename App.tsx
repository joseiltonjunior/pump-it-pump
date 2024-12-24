import './global.css';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import Routes from './src/routes';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    NunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
    NunitoSemiBold: require('./assets/fonts/Nunito-SemiBold.ttf'),
    NunitoMedium: require('./assets/fonts/Nunito-Medium.ttf'),
    NunitoLight: require('./assets/fonts/Nunito-Light.ttf'),
    NunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>falta tratativa</Text>
      </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" />
        <Routes />
      </NavigationContainer>
    </>
  );
}
