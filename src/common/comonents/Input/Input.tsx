import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './InputStyles';

type PropsType = {
	title?: string;
	value: string;
	onChange: (e: any) => void;
	onBlur: () => void;
	password?: boolean;
};

export const Input = ({title, value, onChange, onBlur, password}: PropsType) => {
	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>{title}</Text>}
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={onChange}
				onBlur={onBlur}
				secureTextEntry={password}
			/>
		</View>
	);
};
