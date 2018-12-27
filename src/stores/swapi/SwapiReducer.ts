import ISwapiReducerState from './models/ISwapiReducerState';
import IAction from '../IAction';
import ICategoriesResponse from './models/ICategoriesResponse';
import SwapiAction, {SwapiActionUnion} from './SwapiAction';
import CategoryEnum from '../../constants/CategoryEnum';
import CategoryResponseModel, {SwapiModelUnion} from './models/CategoryResponseModel';
import EntityUtility from '../../utilities/EntityUtility';
import IEntityState from '../../models/IEntityState';
import ILoadMoreEntity from './models/ILoadMoreEntity';

export default class SwapiReducer {
    private static readonly _initialState: ISwapiReducerState = {
        currentCategory: null,
        isLoadingCategories: false,
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
                    isLoadingCategories: true,
                    categories: action.payload as ICategoriesResponse,
                };
            case SwapiAction.LOAD_CATEGORY:
                return {
                    ...state,
                    currentCategory: action.payload as CategoryEnum,
                };
            case SwapiAction.LOAD_CATEGORY_SUCCESS:
                const category: CategoryEnum = action.meta;
                const model: CategoryResponseModel<SwapiModelUnion> = action.payload as any;

                const loadMoreEntity: ILoadMoreEntity = state[category] as ILoadMoreEntity;
                const currentEntity: IEntityState<SwapiModelUnion> = loadMoreEntity ? loadMoreEntity.entity : null;
                const entity: IEntityState<SwapiModelUnion> = EntityUtility.add(model.results, 'id', currentEntity);

                return {
                    ...state,
                    [category]: {
                        totalCount: model.count,
                        loadMoreUrl: model.next,
                        entity,
                    },
                };
            default:
                return state;
        }
    }

}
