/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions,
	Alert
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const AllItemsScreen = ({navigation}) => {
	const [currency, setCurrency] = useState('USD');

	useEffect(() => {
		showAlert();
	}, []);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {

		});

		return unsubscribe;
	}, [navigation]);

	const getData = async () => {  
		try {    
			let jsonValue = await AsyncStorage.getItem('countryData')    
			jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null;
			if (jsonValue != null) {
				setCountryData(jsonValue);
			}
		} catch(e) {    
			console.log(e);
		}
	}

	const showAlert = () =>
		Alert.alert(
			"",
			"Any items that expired from your cart will appear here in your saved items",
			[
				{
					text: "OK, THANKS"
				}
			]
		);

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
			<View style={{marginHorizontal: screenWidth * 0.20, alignItems: 'center'}}>
			<Image
				source={require('../../assets/surprised.png')}
				resizeMode='contain'
				style={{width: 100, height: 100}}
			/>
			<Text style={{fontWeight: 'bold', color: '#2d2d2d', fontSize: 20, marginTop: screenWidth * 0.05}}>NOTHING SAVED...</Text>
			<Text style={{textAlign: 'center', color: '#2d2d2d', marginTop: screenWidth * 0.05}}>{'...no worries. Join to start saving, or sign in to see what you\'ve already saved. Shopping made way easy.'}</Text>
			<TouchableOpacity style={{backgroundColor: '#2d2d2d', width: screenWidth * 0.60, height: screenHeight * 0.07, justifyContent: 'center', alignItems: 'center', marginTop: screenWidth * 0.05}}>
				<Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 15}}>START SHOPPING</Text>
			</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
});

export default AllItemsScreen;
