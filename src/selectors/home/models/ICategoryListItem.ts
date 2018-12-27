import CategoryEnum from '../../../constants/CategoryEnum';

export default interface ICategoryListItem {
    readonly id: string;
    readonly label: string;
    readonly imageUrl: string;
    readonly category: CategoryEnum;
}
