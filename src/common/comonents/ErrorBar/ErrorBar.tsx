import React, {useEffect} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';

import {useAppDispatch, useAppSelector} from 'hooks';
import {errorSelector, setError} from 'app';

import {styles} from './ErrorBarStyles';

export const ErrorBar = () => {
	const error = useAppSelector(errorSelector);

	const dispatch = useAppDispatch();

	const onClose = () => {
		dispatch(setError(null));
	};

	useEffect(() => {
		const id = setTimeout(() => {
			onClose();
		}, 5000);
		return () => {
			clearTimeout(id);
		};
	});

	const warnImage = '../../../assets/images/warning-svgrepo-com.png';
	const closeImage = '../../../assets/images/close-bold-svgrepo-com.png';

	return (
		<Modal visible={!!error} transparent={true} animationType="fade">
			<View style={styles.container} onTouchStart={onClose}>
				<View
					style={styles.errorBar}
					onStartShouldSetResponder={() => true}
					onTouchStart={e => {
						e.stopPropagation();
					}}>
					<Image style={styles.image} source={require(warnImage)} />
					<Text style={styles.message}>{error}</Text>
					<TouchableOpacity onPress={onClose} activeOpacity={0.6}>
						<Image style={styles.image} source={require(closeImage)} />
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};
