import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {newsApi} from './newsApi';
import {NewsType} from './types';

export const fetchNews = createAsyncThunk('news/fetchNews', async (param, {rejectWithValue}) => {
	try {
		const res = await newsApi.fetchNews();
		if (res.ok) {
			return res.data!.news;
		}
		return rejectWithValue(res.data!.errors[0]);
	} catch (e) {
		return rejectWithValue(e);
	}
});
export const fetchNewsItem = createAsyncThunk('news/fetchNewsItem', async (newsId: number, {rejectWithValue}) => {
	try {
		const res = await newsApi.fetchNewsItem(newsId);
		if (res.ok) {
			return res.data!.news;
		}
		return rejectWithValue(res.data!.errors[0]);
	} catch (e) {
		return rejectWithValue(e);
	}
});

const slice = createSlice({
	name: 'news',
	initialState: {
		news: [] as NewsType[],
		newsItem: {} as NewsType,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchNews.fulfilled, (state, action) => {
			state.news = action.payload as NewsType[];
		});
		builder.addCase(fetchNewsItem.fulfilled, (state, action) => {
			state.newsItem = action.payload as NewsType;
		});
	},
});

export const newsReducer = slice.reducer;
