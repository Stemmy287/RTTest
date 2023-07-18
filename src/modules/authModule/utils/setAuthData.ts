import {ApiOkResponse} from 'apisauce';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {UserType} from 'modules/authModule';
import {setHeaders} from 'common/utils';

export const setAuthData = async (res: ApiOkResponse<{user: UserType}>) => {
	const headers = {
		'access-token': res.headers!['access-token'],
		client: res.headers!.client,
		uid: res.headers!.uid,
	};
	const user = {
		username: res.data!.user.username,
		avatar_url: res.data!.user.avatar_url,
	};

	try {
		await AsyncStorage.setItem('authData', JSON.stringify({user, headers}));
		setHeaders(headers);
	} catch (e) {
		throw new Error(e as string);
	}
};
