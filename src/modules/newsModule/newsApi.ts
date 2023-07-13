import {instance} from '../../common/constants';
import {NewsType} from './types';

export const newsApi = {
	fetchNews() {
		return instance.get<{news: NewsType[]}>('news');
	},
	fetchNewsItem(newsId: string) {
		return instance.get<{news: NewsType}>(`news/${newsId}`);
	},
};
