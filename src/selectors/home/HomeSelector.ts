import {createSelector, Selector} from 'reselect';
import IStore from '../../stores/IStore';
import CategoriesResponseModel from '../../stores/swapi/models/CategoriesResponseModel';
import ICategoryMenu from './models/ICategoryMenu';
import StringUtility from '../../utilities/StringUtility';
import SwapiEnum from '../../constants/SwapiEnum';

export class HomeSelector {

    public static getCategoryMenu(categories: CategoriesResponseModel | null, currentCategory: string): ICategoryMenu[] {
        if (categories === null) {
            return [];
        }

        return Object
            .keys(categories)
            .map((key: string) => {
                return {
                    isActive: key === currentCategory,
                    label: StringUtility.toTitleCase(key),
                    id: key as SwapiEnum,
                };
            });
    }

}

export const getCategoryMenu: Selector<IStore, ICategoryMenu[]> = createSelector(
    (state: IStore) => state.swapiReducer.categories,
    (state: IStore) => state.swapiReducer.currentCategory,
    HomeSelector.getCategoryMenu,
);
