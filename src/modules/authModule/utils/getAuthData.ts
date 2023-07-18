import AsyncStorage from '@react-native-async-storage/async-storage';

import {UserType} from 'modules/authModule';
import {HeaderType} from 'app';

export const getAuthData = async () => {
	try {
		const authData = await AsyncStorage.getItem('authData');
		if (authData) {
			return JSON.parse(authData) as {user: UserType; headers: HeaderType};
		}
	} catch (e) {
		throw new Error(e as string);
	}
};
