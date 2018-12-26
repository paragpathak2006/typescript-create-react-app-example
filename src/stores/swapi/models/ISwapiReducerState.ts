import CategoriesResponseModel from './CategoriesResponseModel';
import SwapiEnum from '../../../constants/SwapiEnum';
import CategoryResponseModel, {SwapiModelUnion} from './CategoryResponseModel';

type OthersUnion = SwapiEnum | boolean | CategoriesResponseModel | null | any[];

export default interface ISwapiReducerState {
    readonly [swapiEnum: string]: CategoryResponseModel<SwapiModelUnion> | OthersUnion;
    readonly currentCategory: SwapiEnum;
    readonly isLoadingCategories: boolean;
    readonly categories: CategoriesResponseModel | null;
}
