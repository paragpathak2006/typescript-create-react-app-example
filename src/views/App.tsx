import styles from './App.module.scss';

import * as React from 'react';
import {History} from 'history';
import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch} from 'react-router';
import TopicsAsync from './topics/TopicsAsync';
import HomeAsync from './home/HomeAsync';
import NotFoundAsync from './not-found/NotFoundAsync';
import RouteEnum from '../constants/RouteEnum';
import ModalHub from './modals/ModalHub';
import IAction from '../stores/IAction';
import {Dispatch} from 'redux';
import Header from './components/header/Header';

interface IState {}
interface IProps {
    history: History;
    dispatch: Dispatch<IAction<any>>;
}

export default class App extends React.Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <ConnectedRouter history={this.props.history}>
                <>
                    <ModalHub />
                    <div className={styles.wrapper}>
                        <Header />
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
                </>
            </ConnectedRouter>
        );
    }



}

