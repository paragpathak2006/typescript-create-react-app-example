import * as React from 'react';
import {History} from 'history';
import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch} from 'react-router';
import {Link} from 'react-router-dom';
import TopicsAsync from './topics/TopicsAsync';
import HomeAsync from './home/HomeAsync';
import NotFoundAsync from './not-found/NotFoundAsync';
import RouteEnum from '../constants/RouteEnum';

import styles from './app.module.scss';

interface IState {}
interface IProps {
    history: History;
}

export default class App extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <ConnectedRouter history={this.props.history}>
                <div className={styles.wrapper}>
                    <ul>
                        <li><Link to={RouteEnum.Home}>Home</Link></li>
                        <li><Link to={RouteEnum.Topics}>Topics</Link></li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route
                            exact={true}
                            path={RouteEnum.Home}
                            component={HomeAsync}
                        />
                        <Route
                            path={RouteEnum.Topics}
                            component={TopicsAsync}
                        />
                        <Route component={NotFoundAsync} />
                    </Switch>
                </div>
            </ConnectedRouter>
        );
    }

}

