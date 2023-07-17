import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {styles} from './InputStyles';

type PropsType = {
	title?: string;
	value: string;
	onChange: (e: any) => void;
	onBlur: () => void;
	password?: boolean;
	error?: string;
};

export const Input = ({title, value, onChange, onBlur, password, error}: PropsType) => {
	return (
		<View style={styles().container}>
			{title && <Text style={styles().title}>{title}</Text>}
			<TextInput
				style={styles(error).input}
				value={value}
				onChangeText={onChange}
				onBlur={onBlur}
				secureTextEntry={password}
			/>
			{error && <Text style={styles().error}>{error}</Text>}
		</View>
	);
};
