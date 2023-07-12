import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		rowGap: 90,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 50,
		width: '100%',
		backgroundColor: '#f8f8fa',
	},
	title: {
		color: '#46484c',
		fontSize: 39,
		fontWeight: '900',
	},
	inputsContainer: {
		rowGap: 15,
		width: '100%',
	},
	buttonContainer: {
		width: '100%',
	},
});
