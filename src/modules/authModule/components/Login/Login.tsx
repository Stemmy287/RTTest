import React, {useEffect} from 'react';
import {Input} from '../../../../common/comonents';
import {Text, View} from 'react-native';
import {ButtonStyles} from '../../../../common/comonents/Button/Button';
import {Controller, FieldValues, useForm} from 'react-hook-form';
import {styles} from './LoginStyles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {login} from '../../authSilce';
import {LoginType} from '../../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamListType} from '../../../../screens';
import {isLoggedInSelector} from '../../authSelectors';

export const Login = ({navigation}: NativeStackScreenProps<StackParamListType>) => {
	const dispatch = useAppDispatch();

	const isLoggedIn = useAppSelector(isLoggedInSelector);

	const {control, handleSubmit} = useForm();
	const onSubmit = (data: FieldValues) => {
		dispatch(login(data as LoginType));
	};

	useEffect(() => {
		if (isLoggedIn) {
			navigation.navigate('news');
		}
	}, [isLoggedIn, navigation]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<View style={styles.inputsContainer}>
				<Controller
					control={control}
					render={({field: {value, onChange, onBlur}}) => (
						<Input value={value} onChange={onChange} onBlur={onBlur} title="email" />
					)}
					name="email"
				/>
				<Controller
					control={control}
					render={({field: {value, onChange, onBlur}}) => (
						<Input value={value} onChange={onChange} onBlur={onBlur} title="password" password />
					)}
					name="password"
				/>
			</View>
			<View style={styles.buttonContainer}>
				<ButtonStyles title="Login" callback={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
};
