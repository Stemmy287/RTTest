import {authReducer, login} from './authSilce';
import {UserType} from './types';

let startState = {} as {user: UserType};

beforeEach(() => {
	startState = {
		user: {
			username: 'some',
			avatar_url: '',
		},
	};
});

test('set is loading', () => {
	const action = login.fulfilled(startState, 'requestId', {email: 'some@gmail.com', password: '1234567'});

	const endState = authReducer(
		{
			isLoggedIn: false,
		},
		action,
	);

	expect(endState.isLoggedIn).toBe(true);
});
