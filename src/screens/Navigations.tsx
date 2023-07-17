import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {isLoggedInSelector, Login} from 'modules/authModule';
import {FullNewsItem, NewsList} from 'modules/newsModule';
import {useAppSelector} from 'hooks';
import {ErrorBar} from 'common/comonents';

import {StackParamListType} from './types';

const Stack = createNativeStackNavigator<StackParamListType>();

export const Navigations = () => {
	const isLoggedIn = useAppSelector(isLoggedInSelector);

	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="news"
					screenOptions={{
						headerShown: false,
					}}>
					{isLoggedIn ? (
						<>
							<Stack.Screen name="newsItem" component={FullNewsItem} />
							<Stack.Screen name="news" component={NewsList} />
						</>
					) : (
						<Stack.Screen name="login" component={Login} />
					)}
				</Stack.Navigator>
			</NavigationContainer>
			<ErrorBar />
		</>
	);
};
