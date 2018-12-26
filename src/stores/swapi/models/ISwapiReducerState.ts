import ICategoriesResponse from './ICategoriesResponse';
import SwapiEnum from '../../../constants/SwapiEnum';
import ILoadMoreEntity from './ILoadMoreEntity';

type OthersUnion = boolean | null | SwapiEnum | ICategoriesResponse | ILoadMoreEntity;

export default interface ISwapiReducerState {
    readonly [swapiEnum: string]: ILoadMoreEntity | OthersUnion;
    readonly currentCategory: SwapiEnum;
    readonly isLoadingCategories: boolean;
    readonly categories: ICategoriesResponse | null;
}
