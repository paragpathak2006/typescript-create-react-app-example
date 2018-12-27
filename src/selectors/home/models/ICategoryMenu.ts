import CategoryEnum from '../../../constants/CategoryEnum';

export default interface ICategoryMenu {
    readonly isActive: boolean;
    readonly label: string;
    readonly id: CategoryEnum;
    readonly apiEndpoint: string;
}
