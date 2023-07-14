import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'store';
import {Navigations} from 'screens';
import {StatusBar} from 'react-native';

export function App() {
	return (
		<Provider store={store}>
			<Navigations />
			<StatusBar barStyle="dark-content" backgroundColor="#f8f8fa" />
		</Provider>
	);
}
