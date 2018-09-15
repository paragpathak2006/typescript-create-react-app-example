import {RouterState} from 'connected-react-router';
import IMetaReducerState from './meta/IMetaReducerState';
import {Store} from 'redux';

export default interface IStore extends Store<IStore> {
    readonly metaReducer: IMetaReducerState;
    readonly router: RouterState;
}
