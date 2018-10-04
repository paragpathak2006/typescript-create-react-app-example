import IAction from '../IAction';
import ITopic from './models/ITopic';

export default class TopicAction {

    public static readonly LOAD_TOPICS_SUCCESSFUL: string = 'TopicAction.LOAD_TOPICS_SUCCESSFUL';

    public static loadTopicsSuccessful(models: ITopic[]): IAction<ITopic[]> {
        return {
            payload: models,
            type: TopicAction.LOAD_TOPICS_SUCCESSFUL,
        };
    }

}
