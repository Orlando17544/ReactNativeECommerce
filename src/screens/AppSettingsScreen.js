/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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
	Switch
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const AppSettingsScreen = () => {
	const [country, setCountry] = useState('Mexico');
	const [currency, setCurrency] = useState('USD');
	const [sizes, setSizes] = useState('US');
	const [theme, setTheme] = useState('default');
	const [vibrateAddCart, setVibrateAddCart] = useState(false);

	return (
		<ScrollView style={{flex: 1, marginLeft: 15}}>
		<Text style={{color: '#343434', fontWeight: 'bold', marginTop: 10}}>SETUP</Text>
		<View style={{marginTop: 30}}>
		<Text style={{color: '#343434'}}>Deliver to</Text>
		<Text style={{color: '#787878', marginTop: 10}}>{country}</Text>
		</View>
		<View style={{marginTop: 30}}>
		<Text style={{color: '#343434'}}>Currency</Text>
		<Text style={{color: '#787878', marginTop: 10}}>$ {currency}</Text>
		</View>
		<View style={{marginTop: 30}}>
		<Text style={{color: '#343434'}}>Sizes</Text>
		<Text style={{color: '#787878', marginTop: 10}}>US</Text>
		</View>
		<View style={{backgroundColor: '#808080', height: 1, width: screenWidth, alignSelf: 'center', marginTop: 10, marginRight: 40}}/>
		<Text style={{color: '#343434', fontWeight: 'bold', marginTop: 10}}>OTHER</Text>
		<View style={{marginTop: 30}}>
		<Text style={{color: '#343434'}}>Theme</Text>
		<Text style={{color: '#787878', marginTop: 10}}>System {theme}</Text>
		</View>
		<View style={{marginTop: 30}}>
		<Text style={{color: '#343434'}}>Help & Contact</Text>
		</View>
		<View style={{marginTop: 30}}>
		<Text style={{color: '#343434'}}>Report an issue</Text>
		</View>
		<View style={{marginTop: 30}}>
		<Text style={{color: '#343434'}}>Rate the app</Text>
		</View>
		<View style={{marginTop: 30}}>
		<Text style={{color: '#343434'}}>Notifications</Text>
		</View>
		<View style={{flexDirection: 'row',alignItems: 'center', marginTop: 30}}>
		<Text style={{color: '#343434'}}>Vibrate when you add to cart</Text>
		<Switch style={{marginLeft: screenWidth * 0.35}} 
			trackColor={{ false: "#b2b2b2", true: "#b5d4f0" }}
			thumbColor={vibrateAddCart ? "#076ecb" : "#ececec"}
			onValueChange={() => setVibrateAddCart(previousState => !previousState)}
			value={vibrateAddCart}
		/>
		</View>
		<View style={{marginTop: 30}}>
		<Text style={{color: '#343434', marginBottom: 30}}>Terms & Conditions - Privacy Policy</Text>
		</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
});

export default AppSettingsScreen;
