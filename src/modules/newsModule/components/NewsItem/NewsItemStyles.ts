import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		borderBottomColor: '#cccfd3',
		borderBottomWidth: 1,
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingVertical: 12,
		columnGap: 20,
	},
	image: {
		width: 90,
		height: 90,
		borderRadius: 12,
	},
	contentWrapper: {
		rowGap: 2,
		flexShrink: 1,
	},
	title: {
		fontSize: 23,
		color: '#46484c',
	},
});

export const nativeTagsStyle = {
	p: {
		fontSize: 15,
		color: '#73767c',
	},
};
