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

import LinearGradient from 'react-native-linear-gradient';

const CategoriesScreen = ({navigation}) => {
	const [categoriesData, setCategoriesData] = useState([
		{name: "NEW IN", image: require('../../assets/newIn.png')},
		{name: "CLOTHING", image: require('../../assets/clothing.png')},
		{name: "SHOES", image: require('../../assets/shoes.png')},
		{name: "ACTIVEWEAR", image: require('../../assets/activeWear.png')},
		{name: "ACCESSORIES", image: require('../../assets/accessories.png')},
		{name: "TRENDING NOW", image: require('../../assets/trendingNow.png')},
		{name: "TOPMAN", image: require('../../assets/topMan.png')},
		{name: "Face + Body", image: require('../../assets/faceBody.png')},
		{name: "Brands", image: require('../../assets/brands.png')},
		{name: "Outlet", image: require('../../assets/outlet.png')}
	]);


	return (
		<View style={{flex: 1, backgroundColor: '#FFFFFF', marginHorizontal: screenWidth * 0.05}}>
			<ScrollView>
			<TouchableOpacity>
			<View style={{marginTop: screenHeight * 0.025}}>
				<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#914bf9', '#9de5e2']} style={{paddingLeft: screenWidth * 0.05, paddingTop: screenHeight * 0.05}}>
				<View style={{justifyContent: 'flex-end'}}>
					<Text style={{fontWeight: 'bold'}}>SALE</Text>				
				</View>
				</LinearGradient >
				<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ffb1e5', '#914bf9']} style={{paddingLeft: screenWidth * 0.05, paddingBottom: screenHeight * 0.05}}>
				<View style={{justifyContent: 'flex-end'}}>
					<Text>FINAL DISCOUNTS!</Text>				
				</View>
				</LinearGradient >
			</View>
			</TouchableOpacity>
				{categoriesData.map((categoryData) =>
					<TouchableOpacity key={categoryData.name}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: screenHeight * 0.025, paddingLeft: screenWidth * 0.05, height: screenHeight * 0.20, backgroundColor: '#efefef'}}>
						<Text style={{fontWeight: 'bold', color: '#2d2d2d'}}>{categoryData.name}</Text>
						<Image
							source={categoryData.image}
							resizeMode='contain'
							style={{width: 150, height: 150}}
						/>
					</View>
					</TouchableOpacity>
				)
				}	
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

export default CategoriesScreen;
