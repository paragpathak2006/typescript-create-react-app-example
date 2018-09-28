import * as React from 'react';
import MetaAction from '../../stores/meta/MetaAction';
import IAction from '../../stores/IAction';
import IStore from '../../stores/IStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import styles from './home.module.scss'

interface IState {}
export interface IProps {}
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
                <p>This React/TypeScript code is the awesome part of this repo. Not the HTML or CSS.</p>
            </div>
        );
    }

}

export default connect<IStateToProps, IDispatchToProps, IProps>(mapStateToProps, mapDispatchToProps)(Home);
