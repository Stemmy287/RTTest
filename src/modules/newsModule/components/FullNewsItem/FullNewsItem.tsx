import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamListType} from 'screens';
import {Image, Text, View} from 'react-native';
import {Header} from 'common/comonents';
import {styles} from './FullNewsItemStyles';
import {useAppDispatch, useAppSelector} from 'hooks';
import {fetchNewsItem} from 'modules/newsModule';
import {newsItemSelector} from 'modules/newsModule';
import {isLoadingSelector} from 'app';
import {Loading} from 'common/comonents';

export const FullNewsItem = ({navigation, route}: NativeStackScreenProps<StackParamListType, 'newsItem'>) => {
	const newsItem = useAppSelector(newsItemSelector);
	const isLoading = useAppSelector(isLoadingSelector);

	const dispatch = useAppDispatch();
	const onBack = () => {
		navigation.navigate('news');
	};

	useEffect(() => {
		dispatch(fetchNewsItem(route.params.newsId));
	}, [dispatch, route]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<View style={styles.container}>
			<Header back={onBack} />
			<View style={styles.content}>
				{newsItem.image_url && <Image style={styles.image} source={{uri: newsItem.image_url}} />}
				<Text style={styles.title}>{newsItem.title}</Text>
				<Text style={styles.desc}>{newsItem.short_text}</Text>
			</View>
		</View>
	);
};
