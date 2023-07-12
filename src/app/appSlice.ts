import {createSlice} from '@reduxjs/toolkit';
import {HeaderDataType} from './types';
import {login} from '../modules/authModule';

const slice = createSlice({
	name: 'app',
	initialState: {
		headerData: {} as HeaderDataType,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.headerData = action.payload.headerData;
		});
	},
});

export const appReducer = slice.reducer;
