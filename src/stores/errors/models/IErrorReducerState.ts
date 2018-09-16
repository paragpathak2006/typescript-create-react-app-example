import IRequestError from './IRequestError';

export default interface IErrorReducerState {
    readonly requestErrors: IRequestError[];
}
