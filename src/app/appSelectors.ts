import {AppRootStateType} from 'store';

export const userSelector = (state: AppRootStateType) => state.app.user;
export const errorSelector = (state: AppRootStateType) => state.app.error;
export const isLoadingSelector = (state: AppRootStateType) => state.app.isLoading;
export const isInitializedSelector = (state: AppRootStateType) => state.app.isInitialized;
