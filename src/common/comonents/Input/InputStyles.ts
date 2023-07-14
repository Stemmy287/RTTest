import {StyleSheet} from 'react-native';

export const styles = (error?: string) =>
	StyleSheet.create({
		container: {
			width: '100%',
		},
		title: {
			fontSize: 14,
			fontWeight: '400',
			lineHeight: 24,
			color: '#aaadb2',
		},
		input: {
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: error ? '#E1255A' : '#c3c3c5',
			borderRadius: 10,
			height: 50,
			color: '#46484c',
			fontSize: 20,
			paddingLeft: 10,
			backgroundColor: '#fff',
		},
		error: {
			marginTop: 3,
			color: '#E1255A',
		},
	});
