import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './HeaderStyles';
import {useAppDispatch, useAppSelector} from 'hooks';
import {userSelector} from 'app';
import {PopUp} from 'common/comonents';
import {Logout} from 'common/comonents';
import {logout} from 'modules/authModule';

type PropsType = {
	back?: () => void;
};

export const Header = ({back}: PropsType) => {
	const user = useAppSelector(userSelector);

	const [isVisible, setIsVisible] = useState(false);

	const dispatch = useAppDispatch();
	const show = () => setIsVisible(true);
	const hide = () => setIsVisible(false);

	const onLogout = () => {
		dispatch(logout());
		hide();
	};

	const arrowBackImage = '../../../assets/images/arrow-back-long-svgrepo-com.png';
	const logoutImage = '../../../assets/images/logout-svgrepo-com.png';

	return (
		<>
			<View style={styles.container}>
				{back && (
					<TouchableOpacity activeOpacity={0.6} onPress={back}>
						<Image style={styles.image} source={require(arrowBackImage)} />
					</TouchableOpacity>
				)}
				<View style={styles.userData}>
					{user.avatar_url && <Image style={styles.ava} source={{uri: user.avatar_url}} />}
					<Text style={styles.userName}>{user.username}</Text>
				</View>
				<TouchableOpacity activeOpacity={0.6} onPress={show}>
					<Image style={styles.image} source={require(logoutImage)} />
				</TouchableOpacity>
			</View>
			<PopUp visible={isVisible} onClose={hide}>
				<Logout callback={onLogout} cancel={hide} />
			</PopUp>
		</>
	);
};
