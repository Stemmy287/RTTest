import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './NewsItemStyles';

type PropsType = {
	title: string;
	image_url: string;
	short_text: string;
};

export const NewsItem = ({title, short_text, image_url}: PropsType) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{uri: image_url}} />
			<View style={styles.contentWrapper}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.desc}>{short_text}</Text>
			</View>
		</View>
	);
};
