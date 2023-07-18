import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeAuthData = async () => {
	try {
		await AsyncStorage.removeItem('authData');
	} catch (e) {
		throw new Error(e as string);
	}
};
