import ICategoryListItem from './ICategoryListItem';
import SwapiEnum from '../../../constants/SwapiEnum';

export default interface ICategoryViewData {
    readonly displayCount: string;
    readonly loadMoreUrl: string;
    readonly category: SwapiEnum;
    readonly items: ICategoryListItem[];
}
