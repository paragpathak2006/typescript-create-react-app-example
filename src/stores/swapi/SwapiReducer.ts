import ISwapiReducerState from './models/ISwapiReducerState';
import IAction from '../IAction';
import CategoriesResponseModel from './models/CategoriesResponseModel';
import SwapiAction, {SwapiActionUnion} from './SwapiAction';

export default class SwapiReducer {
    private static readonly _initialState: ISwapiReducerState = {
        currentCategory: '',
        isLoadingCategories: false,
        categories: null,
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
            case SwapiAction.SET_CATEGORY:
                return {
                    ...state,
                    currentCategory: action.payload as string,
                };
            default:
                return state;
        }
    }

}
