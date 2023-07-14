import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		borderTopWidth: 1,
		borderTopStyle: 'solid',
		borderTopColor: '#cccfd3',
	},
	textButton: {
		color: '#E1255A',
		fontSize: 16,
		fontWeight: '600',
	},
	buttonCancel: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		borderTopWidth: 1,
		borderTopStyle: 'solid',
		borderTopColor: '#cccfd3',
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,
	},
	textButtonCancel: {
		color: '#a0a2a4',
		fontSize: 16,
		fontWeight: '500',
	},
});
