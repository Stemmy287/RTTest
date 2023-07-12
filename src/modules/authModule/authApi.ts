import {LoginType, UserType} from './types';
import {instance} from '../../common/constants';

export const authApi = {
	login(data: LoginType) {
		return instance.post<{user: UserType}>('auth/sign_in', data);
	},
};
