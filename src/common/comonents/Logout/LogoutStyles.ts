import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	logout: {
		borderRadius: 12,
		width: '60%',
		backgroundColor: '#f8f8fa',
	},
	notify: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	message: {
		color: '#46484c',
		fontSize: 20,
		fontWeight: '700',
	},
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
});
