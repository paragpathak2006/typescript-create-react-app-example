import {AppContainer} from 'react-hot-loader';
import {applyMiddleware, compose, createStore} from 'redux';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {Provider} from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './stores/rootReducer';
import App from './App';
import './index.css';

const history = createBrowserHistory();

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
        ),
    ),
);

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById('root') as HTMLElement,
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
