import IAction from '../IAction';
import ITopic from './models/ITopic';

export type ContentActionUnion = void | ITopic[];

export default class ContentAction {

    public static readonly LOAD_CONTENT_SUCCESSFUL: string = 'ContentAction.LOAD_CONTENT_SUCCESSFUL';

    public static loadTopicsSuccessful(models: ITopic[]): IAction<ITopic[]> {
        return {
            payload: models,
            type: ContentAction.LOAD_CONTENT_SUCCESSFUL,
        };
    }

}
