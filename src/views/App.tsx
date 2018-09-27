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
import ModalHub from './modals/ModalHub';
import GenericModal from './modals/GenericModal';
import ModalAction from '../stores/modal/ModalAction';
import IAction from '../stores/IAction';
import {Dispatch} from 'redux';

interface IState {}
interface IProps {
    history: History;
    dispatch: Dispatch<IAction<any>>;
}

export default class App extends React.Component<IProps, IState> {

    private _addModalHandler: (event: React.MouseEvent<HTMLButtonElement>) => void = this._addModal.bind(this);

    public render(): JSX.Element {
        return (
            <ConnectedRouter history={this.props.history}>
                <>
                    <ModalHub />
                    <div className={styles.wrapper}>
                        <ul>
                            <li><Link to={RouteEnum.Home}>Home</Link></li>
                            <li><Link to={RouteEnum.Topics}>Topics</Link></li>
                            <li><button className="btn" onClick={this._addModalHandler}>Show Modal</button></li>
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
                </>
            </ConnectedRouter>
        );
    }

    private async _addModal(event: React.MouseEvent<HTMLButtonElement>): Promise<void> {
        const modal: JSX.Element = (
            <GenericModal
                isRequired={true}
                acceptLabel={'Delete'}
                rejectLabel={'Cancel'}
                message={'Hey this is a modal.'}
            />
        );

        this.props.dispatch(ModalAction.addModal(modal));
    }

}

