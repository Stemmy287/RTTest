import {ErrorType} from 'app';
import {instance} from 'common/constants';

import {LoginType, UserType} from './types';

export const authApi = {
	login(data: LoginType) {
		return instance.post<{user: UserType}, ErrorType>('auth/sign_in', data);
	},
};
