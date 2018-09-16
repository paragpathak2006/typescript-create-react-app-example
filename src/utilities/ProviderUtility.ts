import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import IStore from '../stores/IStore';
import {applyMiddleware, createStore} from 'redux';
import {History} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import rootReducer from '../stores/rootReducer';
import createSagaMiddleware, {END, SagaMiddleware} from 'redux-saga';
import rootSaga from '../stores/rootSaga';
import ISagaStore from '../stores/ISagaStore';

export default class ProviderUtility {

    public static createProviderStore(initialState: Partial<IStore> = {}, history: History, isServerSide: boolean = false): ISagaStore {
        const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware();

        const store: ISagaStore = createStore(
            connectRouter(history)(rootReducer),
            composeWithDevTools(
                applyMiddleware(
                    sagaMiddleware,
                    routerMiddleware(history),
                )
            )
        );

        if (isServerSide) {
            // TODO: figure out how to do SSR with create react app and sagas.
            store.runSaga = sagaMiddleware.run;
            store.endSaga = () => store.dispatch(END);
        } else {
            sagaMiddleware.run(rootSaga);
        }

        return store;
    }

}
