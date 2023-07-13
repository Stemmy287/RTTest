import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './LogoutStyles';

type PropsType = {
	callback: () => void;
	cancel: () => void;
};

export const Logout = ({callback, cancel}: PropsType) => {
	return (
		<View style={styles.logout}>
			<View style={styles.notify}>
				<Text style={styles.message}>Выйти из аккаунта?</Text>
			</View>
			<Pressable
				style={({pressed}: {pressed: boolean}) => [{backgroundColor: pressed ? '#d2d2d3' : '#f8f8fa'}, styles.button]}
				onPress={callback}>
				<Text style={styles.textButton}>Выйти</Text>
			</Pressable>
			<Pressable
				style={({pressed}: {pressed: boolean}) => [{backgroundColor: pressed ? '#d2d2d3' : '#f8f8fa'}, styles.buttonCancel]}
				onPress={cancel}>
				<Text>Отмена</Text>
			</Pressable>
		</View>
	);
};
