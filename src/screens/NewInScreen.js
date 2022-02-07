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

const NewInScreen = ({navigation}) => {
	const [newProductsCategoriesData, setNewProductsCategoriesData] = useState([
		{name: 'Clothing', image: require('../../assets/clothingRound.jpg')},
		{name: 'Shoes', image: require('../../assets/shoesRound.jpg')},
		{name: 'Accessories', image: require('../../assets/accessoriesRound.jpg')},
		{name: 'Face + Body', image: require('../../assets/faceBodyRound.jpg')},
		{name: 'Topman', image: require('../../assets/topManRound.jpg')},
		{name: 'Back in stock', image: require('../../assets/backInStockRound.jpg')},
		{name: 'Trending now', image: require('../../assets/trendingNowRound.jpg')},
	]);

	const [newEditsData, setEditsData] = useState([
		{name: 'EVENT ESSENTIALS', image: require('../../assets/eventEssentials.jpg')},
		{name: 'DATE NIGHT', image: require('../../assets/dateNight.jpg')},
		{name: 'ADIDAS', image: require('../../assets/adidas.jpg')},
	]);

	return (
		<View style={{flex: 1, backgroundColor: '#eeeeee'}}>
			<ScrollView>
			<View style={{backgroundColor: '#ffffff', marginTop: screenHeight * 0.025, paddingBottom: 15}}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: screenWidth * 0.05, marginTop: screenHeight * 0.05}}>
					<View style={{justifyContent: 'center'}}>
					<Text style={{fontWeight: 'bold', fontSize:25, color: '#2d2d2d'}}>515</Text>
					<Text style={{fontWeight: 'bold', fontSize: 15, color: '#2d2d2d'}}>NEW ITEMS{'\n'}IN THE LAST 24 HOURS</Text> 
					</View>
					<Image
						source={require('../../assets/completo.jpg')}
						resizeMode='cover'
						style={{width: 75, height: 75, borderRadius: 75 / 2}}
					/>
				</View>
				<TouchableOpacity style={{backgroundColor: '#2d2d2d', marginHorizontal: screenWidth * 0.05, alignItems: 'center', marginTop: screenHeight * 0.025, padding: 10}}>
					<Text style={{color: '#ffffff', fontWeight: 'bold'}}>VIEW ALL</Text>
				</TouchableOpacity>
			</View>
			<View>
				<View style={{marginTop: screenHeight * 0.05, backgroundColor: '#eeeeee', justifyContent: 'flex-end', padding: 15}}>
					<Text style={{fontWeight: 'bold', color: '#2d2d2d', fontSize: 15}}>NEW PRODUCTS</Text>
				</View>
				{newProductsCategoriesData.map((newProductCategoryData) =>
				<View key={newProductCategoryData.name}>
				<View style={{flexDirection: 'row', backgroundColor: '#ffffff', alignItems: 'center', paddingVertical: 10}}>
					<Image
						source={newProductCategoryData.image}
						resizeMode='cover'
						style={{width: 45, height: 45, borderRadius: 45 / 2, marginLeft: screenWidth * 0.05}}
					/>
					<Text style={{marginLeft: 10, color: '#2d2d2d'}}>{newProductCategoryData.name}</Text>
				</View>
				<View style={{backgroundColor: '#eeeeee', height: 1, width: screenWidth, alignSelf: 'center'}}/>
				</View>
				)
				}	
			</View>
			<View>
				<View style={{marginTop: screenHeight * 0.05, backgroundColor: '#eeeeee', justifyContent: 'flex-end', padding: 15}}>
					<Text style={{fontWeight: 'bold', color: '#2d2d2d', fontSize: 15}}>NEW EDITS</Text>
				</View>
				<View style={{backgroundColor: '#ffffff'}}>
				{newEditsData.map((newEditData) =>
				<View key={newEditData.name} style={{flexDirection: 'row', backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 30, marginHorizontal: screenWidth * 0.05, marginTop: screenHeight * 0.020}}>
					<Text style={{color: '#2d2d2d', marginLeft: screenWidth * 0.05, fontWeight: 'bold'}}>{newEditData.name}</Text>
					<Image
						source={newEditData.image}
						resizeMode='cover'
						style={{width: 70, height: 70, borderRadius: 70 / 2, marginRight: screenWidth * 0.05}}
					/>
				</View>
				)
				}
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

export default NewInScreen;
