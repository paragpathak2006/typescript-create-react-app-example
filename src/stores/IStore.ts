import {RouterState} from 'connected-react-router';
import IMetaReducerState from './meta/IMetaReducerState';
import {Store} from 'redux';
import IContentReducerState from './topics/models/IContentReducerState';
import IErrorReducerState from './errors/models/IErrorReducerState';

export default interface IStore extends Store<IStore> {
    readonly contentReducer: IContentReducerState;
    readonly errorReducer: IErrorReducerState;
    readonly metaReducer: IMetaReducerState;
    readonly router: RouterState;
}
