import React from 'react';
import {Input} from '../../../../common/comonents';
import {Text, View} from 'react-native';
import {ButtonStyles} from '../../../../common/comonents/Button/Button';
import {Controller, FieldValues, useForm} from 'react-hook-form';
import {styles} from './LoginStyles';
import {useAppDispatch} from '../../../../hooks';
import {login} from '../../authSilce';
import {LoginType} from '../../types';

type PropsType = {};

export const Login = ({}: PropsType) => {
	const dispatch = useAppDispatch();

	const {control, handleSubmit} = useForm();
	const onSubmit = (data: FieldValues) => {
		dispatch(login(data as LoginType));
	};
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
