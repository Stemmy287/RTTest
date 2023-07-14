import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 30,
	},
	errorBar: {
		width: '95%',
		backgroundColor: '#E1255A',
		borderRadius: 17,
		flexDirection: 'row',
		padding: 10,
		columnGap: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	image: {
		width: 30,
		height: 30,
	},
	message: {
		color: '#fff',
		flexShrink: 1,
		fontSize: 14,
	},
});
