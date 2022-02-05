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

const HomeScreen = ({navigation}) => {

	return (
		<View style={{flex: 1, backgroundColor: '#FFFFFF', marginHorizontal: screenWidth * 0.05}}>
			<ScrollView>
			<View style={{alignItems: 'center', backgroundColor: '#000000', paddingVertical: screenHeight * 0.015, marginTop: screenHeight * 0.025}}>
				<Text style={{fontWeight: 'bold', fontSize: 15, color: '#ffffff'}}>Free shipping & easy returns</Text>
				<Text style={{fontSize: 10, color: '#ffffff'}}>Ts&Cs apply</Text>
			</View>
			<View style={{alignItems: 'center', marginTop: screenHeight * 0.05}}>
				<Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center', color: '#010101', fontFamily: 'sans-serif-condensed'}}>BIG SALE{'\n'}CLEARANCE.{'\n'}HUGE!{'\n'}UP TO 80% OFF!{'\n'}FINAL REDUCTIONS</Text>
				<Text style={{textAlign: 'center', color: '#010101', marginTop: screenHeight * 0.025}}>Limited time only. While stocks last. Selected{'\n'}styles marked down on site.</Text>
			</View>
			<Image
				source={require('../../assets/vibeToRemember.jpg')}
				resizeMode='cover'
				style={{width: screenWidth * 0.90, height: screenHeight * 0.5, marginTop: screenHeight * 0.05, borderColor: '#dc1151', borderWidth: 3}}
			/>
			<View style={{alignItems: 'center', marginTop: screenHeight * 0.025}}>
				<Text style={{fontWeight: 'bold', fontSize: 15, color: '#010101'}}>A VIBE TO REMEMBER</Text>
				<Text>SHOP EVENT LOOKS</Text>
			</View>
			<View style={{marginTop: screenHeight * 0.06}}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<View>
						<Image
							source={require('../../assets/sunSeeker.jpg')}
							resizeMode='cover'
							style={{width: screenWidth * 0.40, height: screenHeight * 0.30}}
						/>
						<View style={{alignItems: 'center'}}>
						<Text style={{fontWeight: 'bold', color: '#010101'}}>SUN SEEKERS</Text>
						<Text>The winter edition</Text>
						</View>
					</View>
					<View>
						<Image
							source={require('../../assets/grunge.jpg')}
							resizeMode='cover'
							style={{width: screenWidth * 0.40, height: screenHeight * 0.30}}
						/>
						<View style={{alignItems: 'center'}}>
						<Text style={{fontWeight: 'bold', color: '#010101'}}>GO GRUNGE</Text>
						<Text>Calling all ravers</Text>
						</View>
					</View>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: screenHeight * 0.1}}>
					<View>
						<Image
							source={require('../../assets/logo.jpg')}
							resizeMode='cover'
							style={{width: screenWidth * 0.40, height: screenHeight * 0.30}}
						/>
						<View style={{alignItems: 'center'}}>
						<Text style={{fontWeight: 'bold', color: '#010101'}}>LOGO LOOKS</Text>
						<Text>Crooked Tongues</Text>
						</View>
					</View>
					<View>
						<Image
							source={require('../../assets/topMan.jpg')}
							resizeMode='cover'
							style={{width: screenWidth * 0.40, height: screenHeight * 0.30}}
						/>
						<View style={{alignItems: 'center'}}>
						<Text style={{fontWeight: 'bold', color: '#010101'}}>TOPMAN</Text>
						<Text>Top things to cop</Text>
						</View>
					</View>
				</View>
				<Image
					source={require('../../assets/dateNight.jpg')}
					resizeMode='cover'
					style={{width: screenWidth * 0.90, height: screenHeight * 0.5, marginTop: screenHeight * 0.05, borderColor: '#dc1151', borderWidth: 3}}
				/>
				<Image
					source={require('../../assets/adidas.jpg')}
					resizeMode='cover'
					style={{width: screenWidth * 0.90, height: screenHeight * 0.5, marginTop: screenHeight * 0.05, borderColor: '#dc1151', borderWidth: 3}}
				/>
				<View>
				<Image
					source={require('../../assets/paypal.webp')}
					resizeMode='contain'
					style={{width: screenWidth * 0.90, height: screenHeight * 0.35, marginTop: screenHeight * 0.025, borderColor: '#ffffff', borderWidth: 3}}
				/>
				<Text style={{textAlign: 'center', position: 'absolute', alignSelf: 'center', marginTop: screenHeight * 0.24, color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>Pay in 4 with PayPal!{'\n'}Giving you more power and choice{'\n'}at the checkout</Text>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eeeeee', marginTop: screenHeight * 0.025}}>
					<View style={{marginLeft: screenWidth * 0.05}}>
						<Text style={{color: '#2d2d2d', fontWeight: 'bold'}}>{"LET'S GET PERSONAL"}</Text>
						<Text style={{color: '#2d2d2d'}}>Sign in for your own top picks</Text>
						<TouchableOpacity style={{backgroundColor: '#2d2d2d', padding: 5, alignItems: 'center', marginTop: screenHeight * 0.025}}>
						<Text style={{fontWeight: 'bold', color: '#ffffff'}}>SIGN IN</Text>
						</TouchableOpacity>
					</View>
					<Image
						source={require('../../assets/recommendations.png')}
						resizeMode='cover'
						style={{width: 130, height: 180, marginRight: screenWidth * 0.05}}
					/>
				</View>
			</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
});

export default HomeScreen;
