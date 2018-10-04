import {RouterState} from 'connected-react-router';
import IMetaReducerState from './meta/IMetaReducerState';
import {Store} from 'redux';
import ITopicReducerState from './topics/models/ITopicReducerState';
import IErrorReducerState from './errors/models/IErrorReducerState';
import IModalReducerState from './modal/IModalReducerState';

export default interface IStore extends Store<IStore> {
    readonly errorReducer: IErrorReducerState;
    readonly metaReducer: IMetaReducerState;
    readonly modalReducer: IModalReducerState;
    readonly topicReducer: ITopicReducerState;
    readonly router: RouterState;
}
