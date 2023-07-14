import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	button: {
		width: '100%',
		height: 50,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#755dd5',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.55,
		shadowRadius: 3.84,

		elevation: 5,
	},
	title: {
		color: '#fff',
		fontWeight: '700',
		fontSize: 20,
		marginBottom: 3,
	},
});
