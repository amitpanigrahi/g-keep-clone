import {createStore} from 'redux';
import {rootReducer} from "../reducers";
import {loadState, saveState} from "../utils/localStorage";
import {debounce} from "../utils/helper";


export const configureStore = () => {

    const persistedState = loadState();

    const store = createStore(
        rootReducer,
        persistedState);

    store.subscribe(debounce(() => {
        saveState({
            ...store.getState()
        });
    }, 3000));

    return store
};
