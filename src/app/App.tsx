import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: '700',
	},
});
