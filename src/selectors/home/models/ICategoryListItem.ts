import SwapiEnum from '../../../constants/SwapiEnum';

export default interface ICategoryListItem {
    readonly id: string;
    readonly label: string;
    readonly category: SwapiEnum;
    readonly imageUrl: string;
}
