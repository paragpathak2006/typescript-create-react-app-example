import IAction from '../IAction';

export type ErrorActionUnion = void | string | Error;

export default class ErrorAction {

    public static readonly REQUEST_FAILURE: string = 'ErrorAction.REQUEST_FAILURE';
    public static readonly REMOVE: string = 'ErrorAction.REMOVE';

    public static requestFailure(errorResponse: Error, errorLocation: string): IAction<Error> {
        console.log(`errorResponse`, errorResponse);
        return {
            error: true,
            meta: errorLocation,
            payload: errorResponse,
            type: ErrorAction.REQUEST_FAILURE,
        };
    }

    public static removeError(errorId: string): IAction<string> {
        return {
            payload: errorId,
            type: ErrorAction.REMOVE,
        };
    }

}
