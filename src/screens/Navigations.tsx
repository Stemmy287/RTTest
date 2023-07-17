import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {isLoggedInSelector, Login} from 'modules/authModule';
import {StackParamListType} from './types';
import {FullNewsItem, NewsList} from 'modules/newsModule';
import {ErrorBar} from 'common/comonents';
import {useAppSelector} from 'hooks';

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
