import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './LoadingStyles';

export const Loading = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Загрузка...</Text>
		</View>
	);
};
