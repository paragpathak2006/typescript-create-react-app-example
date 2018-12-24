import ISwapiReducerState from './models/ISwapiReducerState';
import IAction from '../IAction';
import CategoriesResponseModel from './models/CategoriesResponseModel';
import SwapiAction, {SwapiActionUnion} from './SwapiAction';
import SwapiEnum from '../../constants/SwapiEnum';

export default class SwapiReducer {
    private static readonly _initialState: ISwapiReducerState = {
        currentCategory: null,
        isLoadingCategories: false,
        categories: null,
        [SwapiEnum.People]: [],
        [SwapiEnum.Planets]: [],
        [SwapiEnum.Starships]: [],
        [SwapiEnum.Vehicles]: [],
        [SwapiEnum.Species]: [],
        [SwapiEnum.Films]: [],
    };

    public static reducer(state: ISwapiReducerState = SwapiReducer._initialState, action: IAction<SwapiActionUnion>): ISwapiReducerState {
        switch (action.type) {
            case SwapiAction.LOAD_CATEGORIES:
                return {
                    ...state,
                    isLoadingCategories: true,
                };
            case SwapiAction.LOAD_CATEGORIES_SUCCESS:
                return {
                    ...state,
                    isLoadingCategories: true,
                    categories: action.payload as CategoriesResponseModel,
                };
            case SwapiAction.LOAD_CATEGORY:
                return {
                    ...state,
                    currentCategory: action.payload as SwapiEnum,
                };
            case SwapiAction.LOAD_CATEGORY_SUCCESS:
                const categoryId: SwapiEnum = action.meta;
                const list: any[] = action.payload as any;// TODO: figure out type

                return {
                    ...state,
                    [categoryId]: list,
                };
            default:
                return state;
        }
    }

}
