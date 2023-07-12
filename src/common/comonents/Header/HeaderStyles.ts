import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	header: {
		borderBottomColor: '#cccfd3',
		borderBottomWidth: 1,
		height: 70,
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 30,
	},
	userData: {
		flexDirection: 'row',
		columnGap: 10,
	},
	userName: {
		color: '#46484c',
		fontSize: 25,
		fontWeight: '700',
	},
});
