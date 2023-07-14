import React, {useEffect} from 'react';
import {FlatList, RefreshControl, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamListType} from '../../../../screens';
import {styles} from './NewsListStyles';
import {Header} from '../../../../common/comonents';
import {fetchNews} from '../../newsSlice';
import {newsSelector} from '../../newsSelectors';
import {NewsItem} from '../NewsItem/NewsItem';
import {isLoggedInSelector} from '../../../authModule';
import {isLoadingSelector} from '../../../../app';
import {Loading} from '../../../../common/comonents/Loading/Loading';

export const NewsList = ({navigation}: NativeStackScreenProps<StackParamListType, 'news'>) => {
	const news = useAppSelector(newsSelector);
	const isLoading = useAppSelector(isLoadingSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);

	const isLoggedIn = useAppSelector(isLoggedInSelector);

	useEffect(() => {
		if (!isLoggedIn) {
			navigation.navigate('login');
		}
	}, [isLoggedIn, navigation]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<View style={styles.container}>
			<Header />
			<FlatList
				data={news}
				refreshControl={<RefreshControl onRefresh={() => dispatch(fetchNews())} refreshing={false} />}
				renderItem={({item}) => (
					<TouchableOpacity
						activeOpacity={0.6}
						onPress={() => {
							navigation.navigate('newsItem', {newsId: item.id});
						}}>
						<NewsItem title={item.title} short_text={item.short_text} image_url={item.image_url} />
					</TouchableOpacity>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};
