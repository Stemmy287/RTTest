import React, {PropsWithChildren} from 'react';
import {Modal, View} from 'react-native';
import {styles} from './PopUpStyles';

type PropsType = {
	visible: boolean;
};

export const PopUp = ({visible, children}: PropsWithChildren<PropsType>) => {
	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			<View style={styles.container}>{children}</View>
		</Modal>
	);
};
