import ICategoriesResponse from './ICategoriesResponse';
import SwapiEnum from '../../../constants/SwapiEnum';
import CategoryResponseModel, {SwapiModelUnion} from './CategoryResponseModel';

type OthersUnion = boolean | null | SwapiEnum | ICategoriesResponse;

export default interface ISwapiReducerState {
    readonly [swapiEnum: string]: CategoryResponseModel<SwapiModelUnion> | OthersUnion;
    readonly currentCategory: SwapiEnum;
    readonly isLoadingCategories: boolean;
    readonly categories: ICategoriesResponse | null;
}
