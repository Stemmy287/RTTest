import {AnyAction, combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {authReducer} from '../modules/authModule';
import {appReducer} from '../app';

const rootReducer = combineReducers({
	app: appReducer,
	auth: authReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

//types
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, void, AnyAction>;
