import ISwapiReducerState from './models/ISwapiReducerState';
import IAction from '../IAction';
import ICategoriesResponse from './models/ICategoriesResponse';
import SwapiAction, {SwapiActionUnion} from './SwapiAction';
import CategoryEnum from '../../constants/CategoryEnum';
import CategoryResponseModel, {SwapiModelUnion} from './models/CategoryResponseModel';
import EntityUtility from '../../utilities/EntityUtility';
import IEntityState from '../../models/IEntityState';
import ILoadMoreEntity from './models/ILoadMoreEntity';
import ICategoryRequest from './models/ICategoryRequest';

export default class SwapiReducer {
    private static readonly _initialState: ISwapiReducerState = {
        currentCategory: null,
        isLoadingCategories: false,
        isLoadingCategory: false,
        categories: null,
        [CategoryEnum.People]: null,
        [CategoryEnum.Planets]: null,
        [CategoryEnum.Starships]: null,
        [CategoryEnum.Vehicles]: null,
        [CategoryEnum.Species]: null,
        [CategoryEnum.Films]: null,
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
                    isLoadingCategories: false,
                    categories: action.payload as ICategoriesResponse,
                };
            case SwapiAction.LOAD_CATEGORY:
                return {
                    ...state,
                    isLoadingCategory: true,
                    currentCategory: (action.payload as ICategoryRequest).category,
                };
            case SwapiAction.LOAD_CATEGORY_SUCCESS:
                const category: CategoryEnum = action.meta;
                const model: CategoryResponseModel<SwapiModelUnion> = action.payload as any;

                const loadMoreEntity: ILoadMoreEntity = state[category] as ILoadMoreEntity;
                const currentEntity: IEntityState<SwapiModelUnion> = loadMoreEntity ? loadMoreEntity.entity : null;
                const entity: IEntityState<SwapiModelUnion> = EntityUtility.add(model.results, 'id', currentEntity);

                return {
                    ...state,
                    isLoadingCategory: false,
                    [category]: {
                        totalCount: model.count,
                        loadMoreUrl: model.next,
                        entity,
                    },
                };
            // case SwapiAction.LOAD_DETAILS:
            //     return {
            //         ...state,
            //     };
            case SwapiAction.LOAD_DETAILS_SUCCESS:
                console.log(``, action.payload as SwapiModelUnion);
                return {
                    ...state,
                };
            default:
                return state;
        }
    }

}
