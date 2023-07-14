import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {login, UserType} from '../modules/authModule';

const slice = createSlice({
	name: 'app',
	initialState: {
		user: {} as UserType,
		error: null as string | null,
	},
	reducers: {
		setError(state, action: PayloadAction<string | null>) {
			state.error = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user;
		});
		builder.addMatcher(
			action => action.type.endsWith('rejected'),
			(state, action: PayloadAction<string | null>) => {
				state.error = action.payload;
			},
		);
	},
});

export const appReducer = slice.reducer;
export const {setError} = slice.actions;
