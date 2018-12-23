import IAction from '../IAction';
import CategoriesResponseModel from './models/CategoriesResponseModel';

export type SwapiActionUnion = void | CategoriesResponseModel;

export default class SwapiAction {
    public static readonly LOAD_CATEGORIES: string = 'SwapiAction.LOAD_CATEGORIES';
    public static readonly LOAD_CATEGORIES_SUCCESS: string = 'SwapiAction.LOAD_CATEGORIES_SUCCESS';

    public static loadCategories(): IAction<void> {
        return {
            type: SwapiAction.LOAD_CATEGORIES,
        };
    }

    public static loadCategoriesSuccess(model: CategoriesResponseModel): IAction<CategoriesResponseModel> {
        return {
            type: SwapiAction.LOAD_CATEGORIES_SUCCESS,
            payload: model,
        };
    }
}
