import * as React from 'react';
import * as ReactDOM from 'react-dom';
import IStore from './stores/IStore';
import ProviderUtility from './utilities/ProviderUtility';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './stores/rootReducer';
import {AppContainer} from 'react-hot-loader';
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory, History} from 'history';
import {Provider} from 'react-redux';
import App from './App';

import './index.css';

const initialState: Partial<IStore> = {
};

const history: History = createBrowserHistory();
const store: IStore = ProviderUtility.createProviderStore(initialState, history);
const rootEl: HTMLElement | null = document.getElementById('root');

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>,
        rootEl
    );
    registerServiceWorker();
};

render();

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render();
    });

    // Reload reducers
    module.hot.accept('./stores/rootReducer', () => {
        store.replaceReducer(connectRouter(history)(rootReducer));
    });
}
