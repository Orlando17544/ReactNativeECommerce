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
	Dimensions
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const BoardsScreen = ({navigation}) => {
	const [currency, setCurrency] = useState('USD');

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getData();
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

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
			<Image
				source={require('../../assets/board.png')}
				resizeMode='cover'
				style={{width: 50, height: 50}}
			/>
			<Text style={{fontWeight: 'bold', color: '#2d2d2d', fontSize: 20, marginTop: screenWidth * 0.05}}>NO BOARDS</Text>
			<Text style={{textAlign: 'center', color: '#2d2d2d', marginTop: screenWidth * 0.05}}>Group your favorite items to suit you</Text>
			<TouchableOpacity style={{backgroundColor: '#2d2d2d', width: screenWidth * 0.80, height: screenHeight * 0.07, justifyContent: 'center', alignItems: 'center', marginTop: screenWidth * 0.05}}>
				<Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 15}}>CREATE BOARD</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
});

export default BoardsScreen;
