import ContentAction, {ContentActionUnion} from './ContentAction';
import IAction from '../IAction';
import IContentReducerState from './models/IContentReducerState';
import ITopic from './models/ITopic';

export default class ContentReducer {

    private static readonly _initialState: IContentReducerState = {
        topics: [],
    };

    public static reducer(state: IContentReducerState = ContentReducer._initialState, action: IAction<ContentActionUnion>): IContentReducerState {
        switch (action.type) {
            case ContentAction.LOAD_CONTENT_SUCCESSFUL:
                return {
                    ...state,
                    topics: action.payload as ITopic[],
                };
            default:
                return state;
        }
    }

}
