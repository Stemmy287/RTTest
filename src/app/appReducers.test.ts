import {login, UserType} from 'modules/authModule';
import {appReducer} from './appSlice';

let startState = {} as {user: UserType};

beforeEach(() => {
	startState = {
		user: {
			username: 'some',
			avatar_url: 'https://some',
		},
	};
});

test('set user', () => {
	const action = login.fulfilled(startState, 'requestId', {email: 'some@gmail.com', password: '1234567'});

	const endState = appReducer(
		{
			user: {} as UserType,
			error: null,
			isLoading: false,
		},
		action,
	);

	expect(endState.user.username).toBe('some');
});
