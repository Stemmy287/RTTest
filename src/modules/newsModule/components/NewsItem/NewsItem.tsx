import React from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import RenderHtml from 'react-native-render-html';

import {NewsType} from 'modules/newsModule';
import {styles} from './NewsItemStyles';

import {nativeTagsStyle} from './NewsItemStyles';

type PropsType = {
	news: NewsType;
};

export const NewsItem = ({news}: PropsType) => {
	const {image_url, title, short_text} = news;

	const {width} = useWindowDimensions();

	return (
		<View style={styles.container}>
			{image_url && <Image style={styles.image} source={{uri: image_url}} />}
			<View style={styles.contentWrapper}>
				<Text style={styles.title}>{title}</Text>
				<RenderHtml source={{html: short_text}} tagsStyles={nativeTagsStyle} contentWidth={width} />
			</View>
		</View>
	);
};
