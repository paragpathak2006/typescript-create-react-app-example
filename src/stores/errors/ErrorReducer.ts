import uuid from 'uuid/v4';
import ErrorAction from './ErrorAction';
import IAction from '../IAction';
import IErrorReducerState from './models/IErrorReducerState';
import IRequestError from './models/IRequestError';

export default class ErrorReducer {

    private static readonly _initialState: IErrorReducerState = {
        requestErrors: [],
    };

    public static reducer(state: IErrorReducerState = ErrorReducer._initialState, action: IAction<any>): IErrorReducerState {
        switch (action.type) {
            case ErrorAction.REQUEST_FAILURE:
                return ErrorReducer._requestFailure(state, action);
            case ErrorAction.REMOVE:
                return ErrorReducer._removeError(state, action);
            default:
                return state;
        }
    }

    private static _requestFailure(state: IErrorReducerState, action: IAction<Error>): IErrorReducerState {
        const requestError: IRequestError = {
            httpErrorResponse: action.payload,
            id: uuid(),
        };

        return {
            ...state,
            requestErrors: [
                ...state.requestErrors,
                requestError,
            ],
        };
    }

    private static _removeError(state: IErrorReducerState, action: IAction<string>): IErrorReducerState {
        const errorId: string = action.payload;

        return {
            ...state,
            requestErrors: state.requestErrors.filter((item: IRequestError) => item.id !== errorId),
        };
    }

}
