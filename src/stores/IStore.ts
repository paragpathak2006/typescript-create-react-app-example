import {RouterState} from 'connected-react-router';
import IMetaReducerState from './meta/IMetaReducerState';
import {Store} from 'redux';
import IContentReducerState from './content/models/IContentReducerState';
import IErrorReducerState from './errors/models/IErrorReducerState';
import IModalReducerState from './modal/IModalReducerState';
import ISwapiReducerState from './swapi/models/ISwapiReducerState';

export default interface IStore extends Store<IStore> {
    readonly contentReducer: IContentReducerState;
    readonly errorReducer: IErrorReducerState;
    readonly metaReducer: IMetaReducerState;
    readonly modalReducer: IModalReducerState;
    readonly router: RouterState;
    readonly swapiReducer: ISwapiReducerState;
}
