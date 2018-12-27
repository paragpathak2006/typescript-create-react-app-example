import CategoryEnum from '../../../constants/CategoryEnum';

export default interface ILoadDetails {
    readonly itemId: string;
    readonly category: CategoryEnum;
}
