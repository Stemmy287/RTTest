import React from 'react';
import {Text, View} from 'react-native';
import {Controller, FieldValues, useForm} from 'react-hook-form';

import {useAppDispatch, useAppSelector} from 'hooks';
import {isLoadingSelector} from 'app';
import {Button, Input, Loading} from 'common/comonents';

import {login, LoginType} from 'modules/authModule';
import {styles} from './LoginStyles';

export const Login = () => {
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(isLoadingSelector);

	const {
		control,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm<LoginType>();
	const onSubmit = async (data: FieldValues) => {
		await dispatch(login(data as LoginType));
		reset();
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Логин</Text>
			<View style={styles.inputsContainer}>
				<Controller
					control={control}
					rules={{required: 'Обязательное поле'}}
					render={({field: {value, onChange, onBlur}}) => (
						<Input value={value} onChange={onChange} onBlur={onBlur} title="Почта" error={errors.email?.message} />
					)}
					name="email"
				/>
				<Controller
					control={control}
					rules={{required: 'Обязательное поле'}}
					render={({field: {value, onChange, onBlur}}) => (
						<Input
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							title="Пароль"
							password
							error={errors.password?.message}
						/>
					)}
					name="password"
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button title="Войти" callback={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
};
