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

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

import AllItemsScreen from './AllItemsScreen.js';
import BoardsScreen from './BoardsScreen.js';

const SavedItemsScreen = ({navigation}) => {
	return (
		<Tab.Navigator>
	      	<Tab.Screen name="ALL ITEMS" component={AllItemsScreen} />
	      	<Tab.Screen name="BOARDS" component={BoardsScreen} />
	    	</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
});

export default SavedItemsScreen;
