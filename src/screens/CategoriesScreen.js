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

const CategoriesScreen = ({navigation}) => {
	const [categories, setCategories] = useState(["SALE FINAL DISCOUNTS!", "NEW IN", "CLOTHING", "SHOES", "ACTIVEWEAR", "ACCESSORIES", "TRENDING NOW", "TOPMAN", "Face + Body", "Brands", "Outlet"]);


	return (
		<View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
			<View>
				
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

export default CategoriesScreen;
