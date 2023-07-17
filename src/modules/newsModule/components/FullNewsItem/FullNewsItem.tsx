import React, {useEffect} from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamListType} from 'screens';
import RenderHtml from 'react-native-render-html';

import {useAppDispatch, useAppSelector} from 'hooks';
import {isLoadingSelector} from 'app';
import {Header, Loading} from 'common/comonents';

import {fetchNewsItem, newsItemSelector} from 'modules/newsModule';
import {nativeTagsStyle, styles} from './FullNewsItemStyles';

export const FullNewsItem = ({navigation, route}: NativeStackScreenProps<StackParamListType, 'newsItem'>) => {
	const newsItem = useAppSelector(newsItemSelector);
	const isLoading = useAppSelector(isLoadingSelector);

	const {width} = useWindowDimensions();

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
				<RenderHtml source={{html: newsItem.body}} tagsStyles={nativeTagsStyle} contentWidth={width} />
			</View>
		</View>
	);
};
