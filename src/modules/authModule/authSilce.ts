import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {setIsInitialized} from 'app';
import {setHeaders} from 'common/utils';

import {removeAuthData} from 'modules/authModule';
import {getAuthData} from 'modules/authModule';
import {setAuthData} from 'modules/authModule';
import {LoginType} from './types';
import {authApi} from './authApi';

export const login = createAsyncThunk('auth/login', async (param: LoginType, {rejectWithValue}) => {
	try {
		const res = await authApi.login(param);
		if (res.ok) {
			await setAuthData(res);
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

export const logout = createAsyncThunk('auth/logout', async (param, {rejectWithValue}) => {
	try {
		await removeAuthData();
		return;
	} catch (e) {
		return rejectWithValue(e);
	}
});

export const me = createAsyncThunk('auth/me', async (param, {rejectWithValue, dispatch}) => {
	try {
		const authData = await getAuthData();
		if (authData) {
			setHeaders(authData.headers);
			return authData.user;
		}
		return rejectWithValue('');
	} catch (e) {
		return rejectWithValue(e);
	} finally {
		dispatch(setIsInitialized());
	}
});

const slice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, state => {
			state.isLoggedIn = true;
		});
		builder.addCase(logout.fulfilled, state => {
			state.isLoggedIn = false;
		});
		builder.addCase(me.fulfilled, state => {
			state.isLoggedIn = true;
		});
	},
});

export const authReducer = slice.reducer;
