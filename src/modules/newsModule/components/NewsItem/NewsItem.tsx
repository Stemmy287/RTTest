import React from 'react';
import {Image, Text, View} from 'react-native';

import {NewsType} from 'modules/newsModule';
import {styles} from './NewsItemStyles';

type PropsType = {
	news: NewsType;
};

export const NewsItem = ({news}: PropsType) => {
	const {image_url, title, short_text} = news;

	return (
		<View style={styles.container}>
			{image_url && <Image style={styles.image} source={{uri: image_url}} />}
			<View style={styles.contentWrapper}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.desc}>{short_text}</Text>
			</View>
		</View>
	);
};
