import React, {useEffect} from 'react';
import {Button, Input} from 'common/comonents';
import {Text, View} from 'react-native';
import {Controller, FieldValues, useForm} from 'react-hook-form';
import {styles} from './LoginStyles';
import {useAppDispatch, useAppSelector} from 'hooks';
import {login} from 'modules/authModule';
import {LoginType} from 'modules/authModule';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamListType} from 'screens';
import {isLoggedInSelector} from 'modules/authModule';
import {isLoadingSelector} from 'app';
import {Loading} from 'common/comonents';

export const Login = ({navigation}: NativeStackScreenProps<StackParamListType, 'login'>) => {
	const dispatch = useAppDispatch();
	const isLoggedIn = useAppSelector(isLoggedInSelector);
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

	useEffect(() => {
		if (isLoggedIn) {
			navigation.navigate('news');
		}
	}, [isLoggedIn, navigation]);

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
