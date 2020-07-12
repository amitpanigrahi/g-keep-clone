import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeContextProvider} from "./ThemeContext";
import {Provider} from "react-redux";
import { configureStore } from './store/configureStore';


const store = configureStore({});
ReactDOM.render(
    <ThemeContextProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeContextProvider>
    , document.getElementById('root'));
