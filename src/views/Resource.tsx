import * as React from 'react';
import {topicsJson} from '../stores/dynamicRoutes';
import {RouteComponentProps} from 'react-router-dom';
import {ITopicsRoutePramas} from './Topics';
import {ITopicRoutePramas} from './Topic';
import ITopic from '../stores/models/ITopic';
import IResource from '../stores/models/IResource';
import MetaAction from '../stores/meta/MetaAction';
import IAction from '../stores/IAction';
import IStore from '../stores/IStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

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

class Resource extends React.Component<IStateToProps & IDispatchToProps & IProps & RouteComponentProps<ITopicsRoutePramas & ITopicRoutePramas>, IState> {

    public componentDidMount(): void {
        this.props.dispatch(MetaAction.setMeta({title: 'Resource View'}));
    }

    public render(): JSX.Element {
        const {match} = this.props;
        const topic: ITopic | undefined = topicsJson.find((model: ITopic) => model.id === match.params.topicId);
        let resource: IResource | undefined | null = null;

        if (topic) {
            resource = topic.resources.find((model: IResource) => model.id === match.params.subId);
        }

        return (
            <>
                {resource &&
                    <div>
                        <h3>{resource.name}</h3>
                        <p>{resource.description}</p>
                        <a href={resource.url}>More info.</a>
                    </div>
                }
                {!resource &&
                    <span>Content not found</span>
                }
            </>
        );
    }

}

export default connect<IStateToProps, IDispatchToProps, IProps>(mapStateToProps, mapDispatchToProps)(Resource);
