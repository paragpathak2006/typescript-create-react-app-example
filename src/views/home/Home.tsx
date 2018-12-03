import styles from './Home.module.scss'

import React from 'react';
import MetaAction from '../../stores/meta/MetaAction';
import IAction from '../../stores/IAction';
import IStore from '../../stores/IStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

export interface IProps {}
interface IState {}
interface IStateToProps {}
interface IDispatchToProps {
    dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (state: IStore): IStateToProps => ({});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
    dispatch,
});

class Home extends React.Component<IStateToProps & IDispatchToProps & IProps, IState> {

    public componentDidMount(): void {
        this.props.dispatch(MetaAction.setMeta({title: 'Home View'}));
    }

    public render(): JSX.Element {
        return (
            <div className={styles.wrapper}>
                <h1 className={styles.header}>Home Page</h1>
                <p>The React/TypeScript code is the awesome part of this code. Not the HTML/CSS.</p>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
