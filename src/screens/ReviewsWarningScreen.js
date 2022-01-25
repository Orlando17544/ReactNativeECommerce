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

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ReviewsWarningScreen = ({navigation}) => {

	return (
		<View style={{flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'space-between'}}>
			<View>
			<Image
			source={require('../../assets/reviews.png')}
			resizeMode='cover'
			style={{width: 400, height: 200}}
			/>
			<View style={{marginLeft: screenWidth * 0.1, marginRight: screenWidth * 0.1, marginTop: screenHeight * 0.05}}>
				<Text style={{color: '#363636', fontWeight: 'bold', fontSize: 20}}>APP UPDATES</Text>
				<View style={{flexDirection: 'row', marginTop: screenHeight * 0.025}}>
						<FontAwesome name="star" size={30} color='#363636'/>
						<View style={{marginLeft: screenWidth * 0.025}}>
							<Text style={{color: '#363636', fontWeight: 'bold', fontSize: 18}}>REVIEWS ARE HERE</Text>
							<Text style={{color: '#363636', marginTop: 5}}>Yep, you can now rate and review your purchases! That also means youll be able to see what other people think about items before you buy them.</Text>
						</View>
				</View>
			</View>
			</View>
			<TouchableOpacity style={{backgroundColor: '#2d2d2d', marginBottom: screenHeight * 0.05, alignItems: 'center', padding: 15, marginLeft: screenWidth * 0.1, marginRight: screenWidth * 0.1}} onPress={() => {navigation.navigate('Menu');}}>
				<Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 15}}>OK, THANKS</Text>
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

export default ReviewsWarningScreen;
