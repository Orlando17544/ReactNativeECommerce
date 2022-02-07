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
	Modal
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import HomeScreen from './HomeScreen.js';
import CategoriesScreen from './CategoriesScreen.js';
import NewInScreen from './NewInScreen.js';
import ForYouScreen from './ForYouScreen.js';

const MainScreen = ({navigation}) => {
	const [gender, setGender] = useState('Men');
	const [genderModal, setGenderModal] = useState(false);


	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getGender();
		});

		return unsubscribe;
	}, [navigation]);

	const storeGender = async (value) => {  
		try {    
			await AsyncStorage.setItem('gender', value)  
		} catch (e) {    
			console.log(e);
		}
	}

	const getGender = async () => {  
		try {    
			let value = await AsyncStorage.getItem('gender')    
			if (value != null) {
				setGender(value);
			}
		} catch(e) {    
			console.log(e);
		}
	}

	return (
		<View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
		<View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', marginLeft: screenWidth * 0.05, marginRight: screenWidth * 0.05, marginTop: screenHeight * 0.025}}>
			<View style={{flexDirection: 'row'}}>
				<Modal
					animationType='fade'
					transparent={true}
					visible={genderModal}
					onRequestClose={() => {setGenderModal(false);}}
				>
					<View style={{alignItems: 'flex-start', marginLeft: screenWidth * 0.05 + 32 + screenWidth * 0.05, marginTop: screenHeight * 0.025, backgroundColor: '#ffffff', width: screenWidth * 0.25, elevation: 5}}>
						<TouchableOpacity onPress={() => {storeGender('Men'); setGender('Men'); setGenderModal(false);}}>
							<Text style={{fontSize: 17, color: '#2b2b2b', padding: 15}}>Men</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {storeGender('Women'); setGender('Women'); setGenderModal(false);}}>
							<Text style={{fontSize: 17, color: '#2b2b2b', padding: 15}}>Women</Text>
						</TouchableOpacity>
					</View>
				</Modal>
				<TouchableOpacity onPress={() => {navigation.openDrawer();}}>
					<Entypo name="menu" size={32} color="#2b2b2b" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {setGenderModal(true);}} style={{flexDirection: 'row', alignItems: 'center', marginLeft: screenWidth * 0.05}}>
					<Text style={{color: '#2b2b2b', fontWeight: 'bold', fontSize: 17}}>{gender.toUpperCase()}</Text>
					<EvilIcons name="chevron-down" size={32} color="#2b2b2b" />
				</TouchableOpacity>
			</View>
			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity onPress={() => {navigation.navigate('SavedItems');}}>
					<EvilIcons name='heart' size={32} color='#2b2b2b' />
				</TouchableOpacity>
				<TouchableOpacity>
					<EvilIcons name='search' size={32} color='#2b2b2b' style={{marginLeft: screenWidth * 0.05}}/>
				</TouchableOpacity>
			</View>
		</View>
		<View style={{backgroundColor: '#f2f2f2', height: 1, width: screenWidth, alignSelf: 'center'}}/>
		<Tab.Navigator
			screenOptions={{
				tabBarLabelStyle: { fontWeight: 'bold', fontSize: 10 },
				}}>
			<Tab.Screen name="HOME" component={HomeScreen} />
			<Tab.Screen name="CATEGORIES" component={CategoriesScreen} />
			<Tab.Screen name="NEW IN" component={NewInScreen} />
			<Tab.Screen name="FOR YOU" component={ForYouScreen} />
		</Tab.Navigator>
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
});

export default MainScreen;
