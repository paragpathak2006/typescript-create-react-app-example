import ICategoryListItem from './ICategoryListItem';

export default interface ICategoryViewData {
    readonly displayCount: string;
    readonly loadMoreUrl: string;
    readonly items: ICategoryListItem[];
}
