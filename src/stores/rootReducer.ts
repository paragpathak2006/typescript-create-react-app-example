import IStore from './IStore';
import {combineReducers, Reducer, ReducersMapObject} from 'redux';
import MetaReducer from './meta/MetaReducer';
import ContentReducer from './topics/ContentReducer';
import ErrorReducer from './errors/ErrorReducer';

const reducerMap: ReducersMapObject = {
    contentReducer: ContentReducer.reducer,
    errorReducer: ErrorReducer.reducer,
    metaReducer: MetaReducer.reducer,
};

export default combineReducers(reducerMap) as Reducer<IStore>;
