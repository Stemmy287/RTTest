import {fetchNews, fetchNewsItem, newsReducer} from './newsSlice';
import {NewsType} from './types';

let startState: NewsType[] = [];

beforeEach(() => {
	startState = [
		{
			id: 1,
			title: 'lorem',
			image_url: '',
			image_additional_url: '',
			body: '',
			short_text: 'text',
			created_at: '',
			category: '',
			icon: '',
			model_name: '',
			table_name: '',
		},
		{
			id: 2,
			title: 'lorem some',
			image_url: '',
			image_additional_url: '',
			body: '',
			short_text: 'text lorem',
			created_at: '',
			category: '',
			icon: '',
			model_name: '',
			table_name: '',
		},
		{
			id: 3,
			title: 'lorem some title',
			image_url: '',
			image_additional_url: '',
			body: '',
			short_text: 'text lorem some',
			created_at: '',
			category: '',
			icon: '',
			model_name: '',
			table_name: '',
		},
	];
});

test('fetch news', () => {
	const action = fetchNews.fulfilled(startState, 'requestId', undefined);

	const endState = newsReducer(
		{
			news: [],
			newsItem: {} as NewsType,
		},
		action,
	);
	expect(endState.news.length).toBe(3);
});
test('fetch news item', () => {
	const action = fetchNewsItem.fulfilled(startState[1], 'requestId', 2);

	const endState = newsReducer(
		{
			news: [],
			newsItem: {} as NewsType,
		},
		action,
	);
	expect(endState.newsItem.title).toBe('lorem some');
});
