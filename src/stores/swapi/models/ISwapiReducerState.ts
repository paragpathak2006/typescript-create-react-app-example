import CategoriesResponseModel from './CategoriesResponseModel';

export default interface ISwapiReducerState {
    readonly currentCategory: string;
    readonly isLoadingCategories: boolean;
    readonly categories: CategoriesResponseModel | null;
}
