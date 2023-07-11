import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Login} from '../modules/authModule/components/Login/Login';

export function App() {
	return (
		<View style={styles.container}>
			<Login />
			<StatusBar barStyle="dark-content" backgroundColor="#f8f8fa" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f8f8fa',
	},
	text: {
		fontSize: 30,
		fontWeight: '700',
	},
});
