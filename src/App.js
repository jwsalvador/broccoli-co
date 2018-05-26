import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import HomePage from './pages/HomePage';

import configureStore from './store/configureStore';
import theme from './themes/default';

const store = configureStore({});

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <HomePage />
        </ThemeProvider>
    </Provider>
);

export default App;
