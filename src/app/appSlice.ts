import {createSlice} from '@reduxjs/toolkit';
import {login, UserType} from '../modules/authModule';

const slice = createSlice({
	name: 'app',
	initialState: {
		user: {} as UserType,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user;
		});
	},
});

export const appReducer = slice.reducer;
