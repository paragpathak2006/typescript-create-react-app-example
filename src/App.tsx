import * as React from 'react';
import {History} from 'history';
import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch} from 'react-router';
import {Link} from 'react-router-dom';
import Topics from './views/Topics';
import Home from './views/Home';

import './App.scss';

interface IState {}
interface IProps {
    history: History;
}

export default class App extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <ConnectedRouter history={this.props.history}>
                <div className="App">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route
                            exact={true}
                            path="/"
                            component={Home}
                        />
                        <Route
                            path="/topics"
                            component={Topics}
                        />
                    </Switch>
                </div>
            </ConnectedRouter>
        );
    }

}

