import uuid from 'uuid/v4';
import ErrorAction, {ErrorActionUnion} from './ErrorAction';
import IAction from '../IAction';
import IErrorReducerState from './models/IErrorReducerState';
import IRequestError from './models/IRequestError';

export default class ErrorReducer {

    private static readonly _initialState: IErrorReducerState = {
        requestErrors: [],
    };

    public static reducer(state: IErrorReducerState = ErrorReducer._initialState, action: IAction<ErrorActionUnion>): IErrorReducerState {
        switch (action.type) {
            case ErrorAction.REQUEST_FAILURE:
                const requestError: IRequestError = {
                    httpErrorResponse: action.payload as Error,
                    id: uuid(),
                };

                return {
                    ...state,
                    requestErrors: [
                        ...state.requestErrors,
                        requestError,
                    ],
                };
            case ErrorAction.REMOVE:
                const errorId: string = action.payload as string;

                return {
                    ...state,
                    requestErrors: state.requestErrors.filter((item: IRequestError) => item.id !== errorId),
                };
            default:
                return state;
        }
    }

}
