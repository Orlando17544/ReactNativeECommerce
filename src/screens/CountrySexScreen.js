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

import Flag from 'react-native-flags';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

import AsyncStorage from '@react-native-async-storage/async-storage';

const CountrySexScreen = ({navigation}) => {
	const [countryData, setCountryData] = useState({name: 'Mexico', code: 'MX'});
	const [currency, setCurrency] = useState('USD');

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getCountryData();
		});

		return unsubscribe;
	}, [navigation]);

	const getCountryData = async () => {  
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

	const storeGender = async (value) => {  
		try {    
			await AsyncStorage.setItem('gender', value)  
		} catch (e) {    
			console.log(e);
		}
	}

	return (
		<View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
		<Image 
		source={require('../../android/app/src/main/res/drawable-mdpi/launch_screen.png')} 
		resizeMode='contain'
		style={{width: 400, height: 400}}
		/>
		<Text style={{color: '#000000', fontWeight: 'bold'}}>DELIVER TO:</Text>
		<View style={{alignItems: 'center', flexDirection: 'row'}}>
		<Flag
		code={countryData.code}
		size={32}	
		type='flat'
		/>
		<Text style={{color: '#000000'}}> {countryData.name}, $ {currency}</Text>
		<Text style={{color: '#000000', fontWeight: 'bold'}}>    |    </Text>
		<TouchableOpacity onPress={() => {navigation.navigate('AppSettings');}}>
		<Text style={{color: '#000000', fontWeight: 'bold'}}>CHANGE</Text>
		</TouchableOpacity>
		</View>
		<View style={{flex: 1, justifyContent: 'space-evenly'}}>
		<TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#2d2d2d', width: screenWidth * 0.85, height: screenHeight * 0.08}} onPress={() => {storeGender('Women'); navigation.navigate('ReviewsWarning');}}>
		<Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'bold'}}>WOMEN</Text>
		</TouchableOpacity>
		<TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#2d2d2d', width: screenWidth * 0.85, height: screenHeight * 0.08}} onPress={() => {storeGender('Men'); navigation.navigate('ReviewsWarning');}}>
		<Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'bold'}}>MEN</Text>
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

export default CountrySexScreen;
