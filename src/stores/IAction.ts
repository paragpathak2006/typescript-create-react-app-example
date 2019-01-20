import {Action} from 'redux';

/**
 * https://github.com/acdlite/flux-standard-action
 */
export default interface IAction<T> extends Action<string> {
    /*
     * A string value that differentiates between different actions
     */
    type: string;
    /*
     * (optional)
     * The payload is any data associated with this action.
     */
    payload?: T;
    /*
     * (optional)
     * While this is named error, note that it is just used as a catch.
     * For example, if you are waiting for data to come back,
     * you may want to set this to true so that you can remove a loading spinner.
     * This is placed here so that you have the option to catch and respond.
     */
    error?: boolean;
    /*
     * (optional)
     * this can be anything else that you want to include. This provides a way to
     * include additional information. A good example here, would be some sort
     * of `id` that may not be included on the model itself.
     */
    meta?: any;
}
