import {StyleSheet} from 'react-native';

export const styles = (cancelButton?: boolean) =>
	StyleSheet.create({
		button: {
			alignItems: 'center',
			justifyContent: 'center',
			height: 50,
			borderTopWidth: 1,
			borderTopStyle: 'solid',
			borderTopColor: '#cccfd3',
			borderBottomLeftRadius: cancelButton ? 12 : 0,
			borderBottomRightRadius: cancelButton ? 12 : 0,
		},
		textButton: {
			color: cancelButton ? '#a0a2a4' : '#E1255A',
			fontSize: 16,
			fontWeight: cancelButton ? '500' : '600',
		},
	});
