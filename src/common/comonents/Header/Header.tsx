import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../../../modules/newsModule/components/NewsList/NewsListStyles';
import {useAppSelector} from '../../../hooks';
import {userSelector} from '../../../app';

export const Header = () => {
	const user = useAppSelector(userSelector);

	return (
		<View style={styles.header}>
			<View style={styles.userData}>
				<Image style={styles.ava} source={{uri: user.avatar_url}} />
				<Text style={styles.userName}>{user.username}</Text>
			</View>
		</View>
	);
};
