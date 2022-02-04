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

const TemplateScreen = ({navigation}) => {

	return (
		<View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
			<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eeeeee', marginTop: screenHeight * 0.025}}>
				<View style={{marginLeft: screenWidth * 0.05}}>
					<Text style={{color: '#2d2d2d', fontWeight: 'bold'}}>{"LET'S GET PERSONAL"}</Text>
					<Text style={{color: '#2d2d2d'}}>Sign in for your own top picks</Text>
					<TouchableOpacity style={{backgroundColor: '#2d2d2d', padding: 5, alignItems: 'center', marginTop: screenHeight * 0.025}}>
					<Text style={{fontWeight: 'bold', color: '#ffffff'}}>SIGN IN</Text>
					</TouchableOpacity>
				</View>
				<Image
					source={require('../../assets/style.png')}
					resizeMode='cover'
					style={{width: 120, height: 180, marginRight: screenWidth * 0.05}}
				/>
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

export default TemplateScreen;
