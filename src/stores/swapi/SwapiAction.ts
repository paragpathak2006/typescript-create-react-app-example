import IAction from '../IAction';
import ICategoriesResponse from './models/ICategoriesResponse';
import SwapiEnum from '../../constants/SwapiEnum';
import ILoadDetails from './models/ILoadDetails';
import CategoryResponseModel, {SwapiModelUnion} from './models/CategoryResponseModel';

export type SwapiActionUnion = void | string | ICategoriesResponse;

export default class SwapiAction {
    public static readonly LOAD_CATEGORIES: string = 'SwapiAction.LOAD_CATEGORIES';
    public static readonly LOAD_CATEGORIES_SUCCESS: string = 'SwapiAction.LOAD_CATEGORIES_SUCCESS';
    public static readonly LOAD_CATEGORY: string = 'SwapiAction.LOAD_CATEGORY';
    public static readonly LOAD_CATEGORY_SUCCESS: string = 'SwapiAction.LOAD_CATEGORY_SUCCESS';
    public static readonly LOAD_DETAILS: string = 'SwapiAction.LOAD_DETAILS';
    public static readonly LOAD_DETAILS_SUCCESS: string = 'SwapiAction.LOAD_DETAILS_SUCCESS';

    public static loadCategories(): IAction<void> {
        return {
            type: SwapiAction.LOAD_CATEGORIES,
        };
    }

    public static loadCategoriesSuccess(model: ICategoriesResponse): IAction<ICategoriesResponse> {
        return {
            type: SwapiAction.LOAD_CATEGORIES_SUCCESS,
            payload: model,
        };
    }

    public static loadCategory(category: SwapiEnum, apiUrl: string): IAction<SwapiEnum> {
        console.log('todo')
        return {
            type: SwapiAction.LOAD_CATEGORY,
            payload: category,
            meta: apiUrl,
        };
    }

    public static loadCategorySuccess(models: CategoryResponseModel<SwapiModelUnion>, category: SwapiEnum): IAction<CategoryResponseModel<SwapiModelUnion>> {
        return {
            type: SwapiAction.LOAD_CATEGORY_SUCCESS,
            payload: models,
            meta: category,
        };
    }

    public static loadDetails(itemId: string, category: SwapiEnum): IAction<ILoadDetails> {
        return {
            type: SwapiAction.LOAD_DETAILS,
            payload: {
                itemId,
                category,
            },
        };
    }

    public static loadDetailsSuccess(model: SwapiModelUnion): IAction<SwapiModelUnion> {
        return {
            type: SwapiAction.LOAD_DETAILS_SUCCESS,
            payload: model,
        };
    }
}
