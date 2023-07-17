import React from 'react';
import {Pressable, Text} from 'react-native';

import {styles} from './LogoutButtonStyles';

type PropsType = {
	callback: () => void;
	title: string;
	cancelButton?: boolean;
};

export const LogoutButton = ({callback, title, cancelButton}: PropsType) => {
	const style = ({pressed}: {pressed: boolean}) => [
		{backgroundColor: pressed ? '#d2d2d3' : '#f8f8fa'},
		styles(cancelButton).button,
	];

	return (
		<Pressable style={style} onPress={callback}>
			<Text style={styles(cancelButton).textButton}>{title}</Text>
		</Pressable>
	);
};
