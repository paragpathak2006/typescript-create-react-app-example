import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import IStore from '../stores/IStore';
import {applyMiddleware, createStore} from 'redux';
import {History} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import rootReducer from '../stores/rootReducer';

export default class ProviderUtility {

    public static createProviderStore(initialState: any = {}, history: History, isServerSide: boolean = false): IStore {

        const store = createStore(
            connectRouter(history)(rootReducer),
            composeWithDevTools(
                applyMiddleware(
                    routerMiddleware(history),
                )
            )
        );

        return store;
    }

}
