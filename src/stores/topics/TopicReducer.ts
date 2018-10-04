import TopicAction from './TopicAction';
import IAction from '../IAction';
import ITopicReducerState from './models/ITopicReducerState';
import ITopic from './models/ITopic';

export default class TopicReducer {

    private static readonly _initialState: ITopicReducerState = {
        topics: [],
    };

    public static reducer(state: ITopicReducerState = TopicReducer._initialState, action: IAction<any>): ITopicReducerState {
        switch (action.type) {
            case TopicAction.LOAD_TOPICS_SUCCESSFUL:
                return TopicReducer._loadTopicsSuccessful(state, action);
            default:
                return state;
        }
    }

    private static _loadTopicsSuccessful(state: ITopicReducerState, action: IAction<ITopic[]>): ITopicReducerState {
        return {
            ...state,
            topics: action.payload,
        };
    }

}
