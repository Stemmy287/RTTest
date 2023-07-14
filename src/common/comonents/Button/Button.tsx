import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './ButtonStyles';

type PropsType = {
	title: string;
	callback?: () => void;
};

export const Button = ({title, callback}: PropsType) => {
	const style = ({pressed}: {pressed: boolean}) => [{backgroundColor: pressed ? '#e1255a' : '#f8346b'}, styles.button];

	return (
		<Pressable style={style} onPress={callback}>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
};
