import {instance} from 'common/constants';
import {NewsType} from './types';
import {ErrorType} from 'app';

export const newsApi = {
	fetchNews() {
		return instance.get<{news: NewsType[]}, ErrorType>('news');
	},
	fetchNewsItem(newsId: number) {
		return instance.get<{news: NewsType}, ErrorType>(`news/${newsId}`);
	},
};
