import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import IStore from './stores/IStore';
import ProviderUtility from './utilities/ProviderUtility';
import rootReducer from './stores/rootReducer';
import {AppContainer} from 'react-hot-loader';
import {createBrowserHistory, History} from 'history';
import {Provider} from 'react-redux';
import App from './views/App';

const initialState: Partial<IStore> = {
};

const history: History = createBrowserHistory();
const store: IStore = ProviderUtility.createProviderStore(initialState, history);
const rootEl: HTMLElement | null = document.getElementById('root');

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App
                    history={history}
                    dispatch={store.dispatch}
                />
            </Provider>
        </AppContainer>,
        rootEl
    );
};

render();

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./views/App', () => {
        render();
    });

    // Reload reducers
    module.hot.accept('./stores/rootReducer', () => {
        store.replaceReducer(rootReducer(history));
    });
}
