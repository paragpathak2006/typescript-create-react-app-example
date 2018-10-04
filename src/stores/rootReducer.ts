import IStore from './IStore';
import {combineReducers, Reducer, ReducersMapObject} from 'redux';
import ErrorReducer from './errors/ErrorReducer';
import MetaReducer from './meta/MetaReducer';
import ModalReducer from './modal/ModalReducer';
import TopicReducer from './topics/TopicReducer';

const reducerMap: ReducersMapObject = {    
    errorReducer: ErrorReducer.reducer,
    metaReducer: MetaReducer.reducer,
    modalReducer: ModalReducer.reducer,
    topicReducer: TopicReducer.reducer,
};

export default combineReducers(reducerMap) as Reducer<IStore>;
