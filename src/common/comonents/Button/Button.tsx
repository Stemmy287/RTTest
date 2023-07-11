import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './ButtonStyles';

type PropsType = {
	title: string;
	callback?: () => void;
};

export const ButtonStyles = ({title, callback}: PropsType) => {
	return (
		<Pressable
			style={({pressed}: {pressed: boolean}) => [{backgroundColor: pressed ? '#e1255a' : '#f8346b'}, styles.button]}
			onPress={callback}>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
};
