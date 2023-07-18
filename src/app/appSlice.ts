import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {login, me, UserType} from 'modules/authModule';

const slice = createSlice({
	name: 'app',
	initialState: {
		user: {} as UserType,
		isInitialized: false,
		error: null as string | null,
		isLoading: false,
	},
	reducers: {
		setError(state, action: PayloadAction<string | null>) {
			state.error = action.payload;
		},
		setIsInitialized(state) {
			state.isInitialized = true;
		},
	},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user;
		});
		builder.addCase(me.fulfilled, (state, action) => {
			state.user = action.payload;
		});
		builder.addMatcher(
			action => action.type.endsWith('pending'),
			state => {
				state.isLoading = true;
			},
		);
		builder.addMatcher(
			action => action.type.endsWith('rejected'),
			(state, action: PayloadAction<string | null>) => {
				state.error = action.payload;
				state.isLoading = false;
			},
		);
		builder.addMatcher(
			action => action.type.endsWith('fulfilled'),
			state => {
				state.isLoading = false;
			},
		);
	},
});

export const appReducer = slice.reducer;
export const {setIsInitialized, setError} = slice.actions;
