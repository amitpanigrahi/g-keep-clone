import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from "../reducers";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import {loadState, saveState} from "../utils/localStorage";
import {debounce} from "../utils/helper";


export const configureStore = () => {

    const persistedState = loadState();
    const middlewareEnhancer = applyMiddleware(logger);
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(
        rootReducer,
        persistedState,
        composedEnhancers);

    store.subscribe(debounce(() => {
        saveState({
            ...store.getState()
        });
    }, 5000));

    return store
};
