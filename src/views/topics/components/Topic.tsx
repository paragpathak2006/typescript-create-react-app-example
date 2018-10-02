import styles from './topics.module.scss';

import * as React from 'react';
import {Link, Route, RouteComponentProps} from 'react-router-dom';
import Resource from './Resource';
import ITopic from '../../../stores/topics/models/ITopic';
import MetaAction from '../../../stores/meta/MetaAction';
import IAction from '../../../stores/IAction';
import IStore from '../../../stores/IStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import IResource from '../../../stores/topics/models/IResource';
import {ITopicsRoutePramas} from '../Topics';

export interface ITopicRoutePramas {
    subId: string;
}

interface IState {}
interface IProps {}
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

class Topic extends React.Component<IStateToProps & IDispatchToProps & IProps & RouteComponentProps<ITopicsRoutePramas>, IState> {

    public componentDidMount(): void {
        this.props.dispatch(MetaAction.setMeta({title: 'Topic View'}));
    }

    public render(): JSX.Element {
        const {topics, match} = this.props;
        const topic: ITopic | undefined = topics.find((model: ITopic) => model.id === match.params.topicId);

        return (
            <>
                {topic && (
                    <div className={styles.wrapper}>
                        <h2>{topic.name}</h2>
                        <p>{topic.description}</p>

                        <ul className={styles.links}>
                            {topic.resources.map((model: IResource) => (
                                <li key={model.id}>
                                    <Link to={`${match.url}/${model.id}`}>{model.name}</Link>
                                </li>
                            ))}
                        </ul>

                        <Route
                            path={`${match.path}/:subId`}
                            component={Resource}
                        />
                    </div>
                )}
                {!topic && (
                    <span>Content not found</span>
                )}
            </>
        );
    }

}

export default connect<IStateToProps, IDispatchToProps, IProps>(mapStateToProps, mapDispatchToProps)(Topic);
