/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput
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
import SearchScreen from './src/screens/SearchScreen.js';

import AntDesign from 'react-native-vector-icons/AntDesign.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';

import Voice from 'react-native-voice';

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
		<Stack.Screen name="SavedItems" component={SavedItemsScreen} options={{ title: 'SAVED ITEMS', headerRight: () => {
			return (
				<TouchableOpacity>
					<AntDesign name="plus" size={30} color={"#2d2d2d"}/>
				</TouchableOpacity>
			)
		}
		}}/>
		<Stack.Screen name="Search" component={SearchScreen} options={({ navigation }) => ({headerTitle: () => {
			return (
				<TextInput
					placeholder="Search for items and brands"
				/>
			)
		}, headerRight: () => {
			// Code extracted from https://dev-yakuza.posstree.com/en/react-native/react-native-voice/
			const [isRecording, setIsRecording] = useState(false);
			// text is the text converted from speech
			const [text, setText] = useState('');

			const _onSpeechStart = () => {
				console.log('onSpeechStart');
				setText('');
			};

			const _onSpeechEnd = () => {
				console.log('onSpeechEnd');
			};

			const _onSpeechResults = (event) => {
				console.log('onSpeechResults');
				setText(event.value[0]);
			};

			const _onSpeechError = (event) => {
				console.log('_onSpeechError');
				console.log(event.error);
			};

			const _onRecordVoice = () => {
				if (isRecording) {
					Voice.stop();
					console.log(text);
				} else {
					Voice.start('en-US');
				}
				setIsRecording(!isRecording);
			};

			useEffect(() => {
				Voice.onSpeechStart = _onSpeechStart;
				Voice.onSpeechEnd = _onSpeechEnd;
				Voice.onSpeechResults = _onSpeechResults;
				Voice.onSpeechError = _onSpeechError;

				return () => {
					Voice.destroy().then(Voice.removeAllListeners);
				};
			}, []);

			return (
				<TouchableOpacity onPress={() => {_onRecordVoice();}} >
				<FontAwesome name="microphone" size={30} color={isRecording ? "#00FF00" : "#2d2d2d"}/>
				</TouchableOpacity>
			)
		}	
		})}/>
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
