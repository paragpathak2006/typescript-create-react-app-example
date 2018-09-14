import * as React from 'react';
import {topicsJson} from '../stores/dynamicRoutes';
import {RouteComponentProps} from 'react-router-dom';
import {ITopicsRoutePramas} from './Topics';
import {ITopicRoutePramas} from './Topic';
import ITopic from '../stores/models/ITopic';
import IResource from '../stores/models/IResource';

interface IState {}
interface IProps {}

export default class Resource extends React.Component<IProps & RouteComponentProps<ITopicsRoutePramas & ITopicRoutePramas>, IState> {

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
