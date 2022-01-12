/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import CountrySexScreen from './src/screens/CountrySexScreen.js';
import AppSettingsScreen from './src/screens/AppSettingsScreen.js';

const App = () => {
  SplashScreen.hide();

  return (
	  <NavigationContainer>
	  	<Stack.Navigator initialRouteName="AppSettings">
	  		<Stack.Screen name="CountrySex" component={CountrySexScreen} options={{headerShown: false}}/>
	  		<Stack.Screen name="AppSettings" component={AppSettingsScreen} options={{ title: 'APP SETTINGS' }}/>
	  	</Stack.Navigator>
	  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
