import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		borderBottomColor: '#cccfd3',
		borderBottomWidth: 1,
		height: 70,
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 20,
		justifyContent: 'space-between',
	},
	image: {
		width: 30,
		height: 30,
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
	ava: {
		width: 35,
		height: 35,
		borderRadius: 20,
	},
});
