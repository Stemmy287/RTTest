import {LoginType, UserType} from './types';
import {ErrorType} from 'app';
import {instance} from 'common/constants';

export const authApi = {
	login(data: LoginType) {
		return instance.post<{user: UserType}, ErrorType>('auth/sign_in', data);
	},
};
