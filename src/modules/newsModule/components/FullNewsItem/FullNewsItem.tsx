import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamListType} from '../../../../screens';
import {Image, Text, View} from 'react-native';
import {Header} from '../../../../common/comonents';
import {styles} from './FullNewsItemStyles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {fetchNewsItem} from '../../newsSlice';
import {newsItemSelector} from '../../newsSelectors';
import {isLoggedInSelector} from '../../../authModule';

export const FullNewsItem = ({navigation, route}: NativeStackScreenProps<StackParamListType, 'newsItem'>) => {
	const newsItem = useAppSelector(newsItemSelector);
	const isLoggedIn = useAppSelector(isLoggedInSelector);

	const dispatch = useAppDispatch();
	const onBack = () => {
		navigation.navigate('news');
	};

	useEffect(() => {
		dispatch(fetchNewsItem(route.params.newsId));
	}, [dispatch, route]);

	useEffect(() => {
		if (!isLoggedIn) {
			navigation.navigate('login');
		}
	}, [isLoggedIn, navigation]);

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
