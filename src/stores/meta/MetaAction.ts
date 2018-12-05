import IAction from '../IAction';
import ITitleDescription from './models/ITitleDescription';

export type MetaActionUnion = void | ITitleDescription;

export default class MetaAction {

    public static readonly SET_META: string = 'MetaAction.SET_META';

    public static setMeta(meta: ITitleDescription): IAction<ITitleDescription> {
        if (document) {
            document.title = meta.title;
        }

        return {
            payload: meta,
            type: MetaAction.SET_META,
        };
    }

}
