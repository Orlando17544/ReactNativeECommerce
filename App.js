/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

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
import DeliverToScreen from './src/screens/DeliverToScreen.js';
import ReviewsWarningScreen from './src/screens/ReviewsWarningScreen.js';
import MenuScreen from './src/screens/MenuScreen.js';
import SavedItemsScreen from './src/screens/SavedItemsScreen.js';

const App = () => {
	SplashScreen.hide();

	return (
		<NavigationContainer>
		<Stack.Navigator initialRouteName="CountrySex">
		<Stack.Screen name="CountrySex" component={CountrySexScreen} options={{headerShown: false}}/>
		<Stack.Screen name="AppSettings" component={AppSettingsScreen} options={{ title: 'APP SETTINGS' }}/>
		<Stack.Screen name="DeliverTo" component={DeliverToScreen} options={{ title: 'DELIVER TO' }}/>
		<Stack.Screen name="ReviewsWarning" component={ReviewsWarningScreen} options={{headerShown: false}}/>
		<Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
		<Stack.Screen name="SavedItems" component={SavedItemsScreen} options={{ title: 'SAVED ITEMS'}}/>
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
