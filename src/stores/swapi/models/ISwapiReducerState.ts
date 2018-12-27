import ICategoriesResponse from './ICategoriesResponse';
import CategoryEnum from '../../../constants/CategoryEnum';
import ILoadMoreEntity from './ILoadMoreEntity';

export default interface ISwapiReducerState {
    [CategoryEnum.People]: ILoadMoreEntity;
    [CategoryEnum.Planets]: ILoadMoreEntity;
    [CategoryEnum.Starships]: ILoadMoreEntity;
    [CategoryEnum.Vehicles]: ILoadMoreEntity;
    [CategoryEnum.Species]: ILoadMoreEntity;
    [CategoryEnum.Films]: ILoadMoreEntity;
    readonly currentCategory: CategoryEnum;
    readonly isLoadingCategories: boolean;
    readonly isLoadingCategory: boolean;
    readonly categories: ICategoriesResponse | null;
}
