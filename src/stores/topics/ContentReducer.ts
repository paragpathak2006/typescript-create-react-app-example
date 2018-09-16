import ContentAction from './ContentAction';
import IAction from '../IAction';
import IContentReducerState from './models/IContentReducerState';
import ITopic from './models/ITopic';

export default class ContentReducer {

    private static readonly _initialState: IContentReducerState = {
        topics: [],
    };

    public static reducer(state: IContentReducerState = ContentReducer._initialState, action: IAction<any>): IContentReducerState {
        switch (action.type) {
            case ContentAction.LOAD_CONTENT_SUCCESSFUL:
                return ContentReducer._loadContentSuccessful(state, action);
            default:
                return state;
        }
    }

    private static _loadContentSuccessful(state: IContentReducerState, action: IAction<ITopic[]>): IContentReducerState {
        return {
            ...state,
            topics: action.payload,
        };
    }

}
