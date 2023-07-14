import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './LogoutStyles';
import {LogoutButton} from './LogoutButton/LogoutButton';

type PropsType = {
	callback: () => void;
	cancel: () => void;
};

export const Logout = ({callback, cancel}: PropsType) => {
	return (
		<View
			style={styles.logout}
			onStartShouldSetResponder={() => true}
			onTouchStart={e => {
				e.stopPropagation();
			}}>
			<View style={styles.notify}>
				<Text style={styles.message}>Выйти из аккаунта?</Text>
			</View>
			<LogoutButton callback={callback} title="Выйти" />
			<LogoutButton callback={cancel} title="Отмена" cancelButton />
		</View>
	);
};
