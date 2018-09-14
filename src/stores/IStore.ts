import {RouterState} from 'connected-react-router';
import IMetaReducerState from './meta/IMetaReducerState';

export default interface IStore {
    readonly metaReducer: IMetaReducerState;
    readonly router: RouterState;
}
