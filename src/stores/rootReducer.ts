import IStore from './IStore';
import {combineReducers, Reducer, ReducersMapObject} from 'redux';
import MetaReducer from './meta/MetaReducer';

const reducerMap: ReducersMapObject = {
    metaReducer: MetaReducer.reducer,
};

export default combineReducers(reducerMap) as Reducer<IStore>;
