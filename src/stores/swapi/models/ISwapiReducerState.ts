import CategoriesResponseModel from './CategoriesResponseModel';

export default interface ISwapiReducerState {
    readonly isLoadingCategories: boolean;
    readonly categories: CategoriesResponseModel;
}
