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
	TextInput
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SearchScreen = ({navigation}) => {
	/*const [currency, setCurrency] = useState('USD');

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
	}*/

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
		<EvilIcons name='search' size={35} />
		<Text style={{fontSize: 15}}>You have no recent searches.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
});

export default SearchScreen;
