import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from '../modules/authModule';
import {StackParamListType} from './types';
import {NewsList} from '../modules/newsModule/components/NewsList/NewsList';

const Stack = createNativeStackNavigator<StackParamListType>();

export const Navigations = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="news"
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="login" component={Login} />
				<Stack.Screen name="news" component={NewsList} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};