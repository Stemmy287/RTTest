import {createSlice} from '@reduxjs/toolkit';
import {HeaderDataType} from './types';
import {login, UserType} from '../modules/authModule';

const slice = createSlice({
	name: 'app',
	initialState: {
		user: {} as UserType,
		headerData: {} as HeaderDataType,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.headerData = action.payload.headerData;
			state.user = action.payload.user;
		});
	},
});

export const appReducer = slice.reducer;
