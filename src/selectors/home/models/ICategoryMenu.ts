import SwapiEnum from '../../../constants/SwapiEnum';

export default interface ICategoryMenu {
    readonly isActive: boolean;
    readonly label: string;
    readonly id: SwapiEnum;
}
