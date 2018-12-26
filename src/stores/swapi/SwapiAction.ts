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

    public static loadCategory(categoryId: SwapiEnum): IAction<SwapiEnum> {
        return {
            type: SwapiAction.LOAD_CATEGORY,
            payload: categoryId,
        };
    }

    public static loadCategorySuccess(models: CategoryResponseModel<SwapiModelUnion>, categoryId: SwapiEnum): IAction<CategoryResponseModel<SwapiModelUnion>> {
        return {
            type: SwapiAction.LOAD_CATEGORY_SUCCESS,
            payload: models,
            meta: categoryId,
        };
    }

    public static loadDetails(itemId: string, categoryId: SwapiEnum): IAction<ILoadDetails> {
        return {
            type: SwapiAction.LOAD_DETAILS,
            payload: {
                itemId,
                categoryId,
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
