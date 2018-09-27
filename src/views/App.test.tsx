import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const history: any = {};
const dispatch: any = {};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App
        history={history}
        dispatch={dispatch}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
});
