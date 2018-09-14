import * as React from 'react';
import {topicsJson} from '../stores/dynamicRoutes';
import {Link, Route, RouteComponentProps} from 'react-router-dom';
import Topic from './Topic';
import ITopic from '../stores/models/ITopic';

export interface ITopicsRoutePramas {
    topicId: string;
}

interface IState {}
interface IProps {}

export default class Topics extends React.Component<IProps & RouteComponentProps<void>, IState> {

    public render(): JSX.Element {
        const {match} = this.props;

        return (
            <div>
                <h1>Topics</h1>
                <ul>
                    {topicsJson.map((model: ITopic) => (
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
