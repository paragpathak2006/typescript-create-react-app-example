import CategoriesResponseModel from './CategoriesResponseModel';
import SwapiEnum from '../../../constants/SwapiEnum';

type OthersUnion = SwapiEnum | boolean | CategoriesResponseModel | null | any[];

export default interface ISwapiReducerState {
    readonly [swapiEnum: string]: any[] | OthersUnion;
    readonly currentCategory: SwapiEnum;
    readonly isLoadingCategories: boolean;
    readonly categories: CategoriesResponseModel | null;
}
