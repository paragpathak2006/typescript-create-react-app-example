import styles from './Topics.module.scss';

import * as React from 'react';
import {Link, Route, RouteComponentProps} from 'react-router-dom';
import Topic from './components/Topic';
import ITopic from '../../stores/topics/models/ITopic';
import MetaAction from '../../stores/meta/MetaAction';
import IAction from '../../stores/IAction';
import IStore from '../../stores/IStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

export interface ITopicsRoutePramas {
    topicId: string;
}

export interface IProps {}
interface IState {}
interface IStateToProps {
    readonly topics: ITopic[];
}
interface IDispatchToProps {
    dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (state: IStore): IStateToProps => ({
    topics: state.contentReducer.topics,
});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
    dispatch,
});

class Topics extends React.Component<IStateToProps & IDispatchToProps & IProps & RouteComponentProps<void>, IState> {

    public componentDidMount(): void {
        this.props.dispatch(MetaAction.setMeta({title: 'Topics View'}));
    }

    public render(): JSX.Element {
        const {topics, match} = this.props;

        return (
            <div className={styles.wrapper}>
                <h1>Topics</h1>
                <ul>
                    {topics.map((model: ITopic) => (
                        <li key={model.id}>
                            <Link to={`${match.url}/${model.id}`}>{model.name}</Link>
                        </li>
                    ))}
                </ul>

                <hr />

                <Route
                    path={`${match.path}/:topicId`}
                    component={Topic}
                />
            </div>
        );
    }

}

export default connect<IStateToProps, IDispatchToProps, IProps>(mapStateToProps, mapDispatchToProps)(Topics);
