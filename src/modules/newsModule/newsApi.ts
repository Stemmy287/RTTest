import {instance} from '../../common/constants';
import {NewsType} from './types';

export const newsApi = {
	fetchNews() {
		return instance.get<{news: NewsType[]}>('news');
	},
	fetchNewsItem(newsId: number) {
		return instance.get<{news: NewsType}>(`news/${newsId}`);
	},
};
