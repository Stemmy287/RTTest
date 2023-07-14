import {AppRootStateType} from 'store';

export const newsSelector = (state: AppRootStateType) => state.news.news;
export const newsItemSelector = (state: AppRootStateType) => state.news.newsItem;
