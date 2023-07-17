import React, {PropsWithChildren} from 'react';
import {Modal, View} from 'react-native';

import {styles} from './PopUpStyles';

type PropsType = {
	visible: boolean;
	onClose?: () => void;
};

export const PopUp = ({visible, children, onClose}: PropsWithChildren<PropsType>) => {
	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			<View style={styles.container} onTouchStart={onClose}>
				{children}
			</View>
		</Modal>
	);
};
