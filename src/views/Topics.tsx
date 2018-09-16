import * as React from 'react';
import {topicsJson} from '../stores/dynamicRoutes';
import {Link, Route, RouteComponentProps} from 'react-router-dom';
import Topic from './Topic';
import ITopic from '../stores/topics/models/ITopic';
import MetaAction from '../stores/meta/MetaAction';
import IAction from '../stores/IAction';
import IStore from '../stores/IStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

export interface ITopicsRoutePramas {
    topicId: string;
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

class Topics extends React.Component<IStateToProps & IDispatchToProps & IProps & RouteComponentProps<void>, IState> {

    public componentDidMount(): void {
        this.props.dispatch(MetaAction.setMeta({title: 'Topics View'}));
    }

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

export default connect<IStateToProps, IDispatchToProps, IProps>(mapStateToProps, mapDispatchToProps)(Topics);
