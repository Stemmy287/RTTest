import React, {useEffect} from 'react';
import {FlatList, RefreshControl, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamListType} from 'screens';

import {useAppDispatch, useAppSelector} from 'hooks';
import {isLoadingSelector} from 'app';
import {Header} from 'common/comonents';
import {Loading} from 'common/comonents';

import {fetchNews} from 'modules/newsModule';
import {newsSelector} from 'modules/newsModule';
import {NewsItem} from 'modules/newsModule';
import {styles} from './NewsListStyles';

export const NewsList = ({navigation}: NativeStackScreenProps<StackParamListType, 'news'>) => {
	const news = useAppSelector(newsSelector);
	const isLoading = useAppSelector(isLoadingSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);

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
						<NewsItem news={item} />
					</TouchableOpacity>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};
