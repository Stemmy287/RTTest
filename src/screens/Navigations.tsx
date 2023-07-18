import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {isLoggedInSelector, Login, me} from 'modules/authModule';
import {FullNewsItem, NewsList} from 'modules/newsModule';
import {useAppDispatch, useAppSelector} from 'hooks';
import {ErrorBar, Loading} from 'common/comonents';

import {StackParamListType} from './types';
import {isInitializedSelector} from 'app';

const Stack = createNativeStackNavigator<StackParamListType>();

export const Navigations = () => {
	const isLoggedIn = useAppSelector(isLoggedInSelector);
	const isInitialized = useAppSelector(isInitializedSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(me());
	}, [dispatch]);

	if (!isInitialized) {
		return <Loading />;
	}

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
