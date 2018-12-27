import ICategoriesResponse from './ICategoriesResponse';
import CategoryEnum from '../../../constants/CategoryEnum';
import ILoadMoreEntity from './ILoadMoreEntity';

type OthersUnion = boolean | null | CategoryEnum | ICategoriesResponse | ILoadMoreEntity;

export default interface ISwapiReducerState {
    readonly [categoryEnum: string]: ILoadMoreEntity | OthersUnion;
    readonly currentCategory: CategoryEnum;
    readonly isLoadingCategories: boolean;
    readonly isLoadingCategory: boolean;
    readonly categories: ICategoriesResponse | null;
}
