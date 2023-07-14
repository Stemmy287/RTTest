import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LoginType} from './types';
import {authApi} from './authApi';
import {instance} from 'common/constants';

export const login = createAsyncThunk('auth/login', async (param: LoginType, {rejectWithValue}) => {
	try {
		const res = await authApi.login(param);
		if (res.ok) {
			instance.setHeaders({
				'access-token': res.headers!['access-token'],
				client: res.headers!.client,
				uid: res.headers!.uid,
			});
			return {
				user: {
					username: res.data!.user.username,
					avatar_url: res.data!.user.avatar_url,
				},
			};
		}
		return rejectWithValue(res.data!.errors[0]);
	} catch (e) {
		return rejectWithValue(e);
	}
});

const slice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
	},
	reducers: {
		logout(state) {
			state.isLoggedIn = false;
		},
	},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, state => {
			state.isLoggedIn = true;
		});
	},
});

export const authReducer = slice.reducer;
export const {logout} = slice.actions;
