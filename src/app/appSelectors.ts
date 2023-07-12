import {AppRootStateType} from '../store';

export const userSelector = (state: AppRootStateType) => state.app.user;
