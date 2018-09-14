import * as React from 'react';
import {topicsJson} from '../stores/dynamicRoutes';
import {Link, Route, RouteComponentProps} from 'react-router-dom';
import Resource from './Resource';
import {ITopicsRoutePramas} from './Topics';
import ITopic from '../stores/models/ITopic';

export interface ITopicRoutePramas {
    subId: string;
}

interface IState {}
interface IProps {}

export default class Topic extends React.Component<IProps & RouteComponentProps<ITopicsRoutePramas>, IState> {

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
                            {topic.resources.map((sub: any) => (
                                <li key={sub.id}>
                                    <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
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
