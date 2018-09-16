import * as React from 'react';
import {topicsJson} from '../stores/dynamicRoutes';
import {Link, Route, RouteComponentProps} from 'react-router-dom';
import Resource from './Resource';
import {ITopicsRoutePramas} from './Topics';
import ITopic from '../stores/topics/models/ITopic';
import MetaAction from '../stores/meta/MetaAction';
import IAction from '../stores/IAction';
import IStore from '../stores/IStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import IResource from '../stores/topics/models/IResource';

export interface ITopicRoutePramas {
    subId: string;
}

interface IState {}
interface IProps {}
interface IStateToProps {}
interface IDispatchToProps {
    dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (state: IStore): IStateToProps => ({});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
    dispatch,
});

class Topic extends React.Component<IStateToProps & IDispatchToProps & IProps & RouteComponentProps<ITopicsRoutePramas>, IState> {

    public componentDidMount(): void {
        this.props.dispatch(MetaAction.setMeta({title: 'Topic View'}));
    }

    public render(): JSX.Element {
        const {match} = this.props;
        const topic: ITopic | undefined = topicsJson.find((model: ITopic) => model.id === match.params.topicId);

        return (
            <>
                {topic &&
                    <div>
                        <h2>{topic.name}</h2>
                        <p>{topic.description}</p>

                        <ul>
                            {topic.resources.map((model: IResource) => (
                                <li key={model.id}>
                                    <Link to={`${match.url}/${model.id}`}>{model.name}</Link>
                                </li>
                            ))}
                        </ul>

                        <hr />

                        <Route
                            path={`${match.path}/:subId`}
                            component={Resource}
                        />
                    </div>
                }
                {!topic &&
                    <span>Content not found</span>
                }
            </>
        );
    }

}

export default connect<IStateToProps, IDispatchToProps, IProps>(mapStateToProps, mapDispatchToProps)(Topic);