import IAction from '../IAction';
import CategoriesResponseModel from './models/CategoriesResponseModel';
import SwapiEnum from '../../constants/SwapiEnum';

export type SwapiActionUnion = void | string | CategoriesResponseModel;

export default class SwapiAction {
    public static readonly LOAD_CATEGORIES: string = 'SwapiAction.LOAD_CATEGORIES';
    public static readonly LOAD_CATEGORIES_SUCCESS: string = 'SwapiAction.LOAD_CATEGORIES_SUCCESS';
    public static readonly LOAD_CATEGORY: string = 'SwapiAction.LOAD_CATEGORY';
    public static readonly LOAD_CATEGORY_SUCCESS: string = 'SwapiAction.LOAD_CATEGORY_SUCCESS';
    // public static readonly LOAD_SWAPI: string = 'SwapiAction.LOAD_SWAPI';
    // public static readonly LOAD_SWAPI_SUCCESS: string = 'SwapiAction.LOAD_SWAPI_SUCCESS';

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

    public static loadCategory(categoryId: SwapiEnum): IAction<SwapiEnum> {
        return {
            type: SwapiAction.LOAD_CATEGORY,
            payload: categoryId,
        };
    }

    public static loadCategorySuccess(models: any[], categoryId: SwapiEnum): IAction<any[]> {
        return {
            type: SwapiAction.LOAD_CATEGORY_SUCCESS,
            payload: models,
            meta: categoryId,
        };
    }

    // public static loadSwapi(value: SwapiEnum): IAction<SwapiEnum> {
    //     return {
    //         type: SwapiAction.LOAD_SWAPI,
    //         payload: value,
    //     };
    // }
    //
    // public static loadSwapiSuccess(model: any): IAction<any> {
    //     return {
    //         type: SwapiAction.LOAD_SWAPI_SUCCESS,
    //         payload: model,
    //     };
    // }
}
