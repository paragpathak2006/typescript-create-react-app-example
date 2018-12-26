import {createSelector, Selector} from 'reselect';
import IStore from '../../stores/IStore';
import ICategoriesResponse from '../../stores/swapi/models/ICategoriesResponse';
import ICategoryMenu from './models/ICategoryMenu';
import StringUtility from '../../utilities/StringUtility';
import SwapiEnum from '../../constants/SwapiEnum';
import {SwapiModelUnion} from '../../stores/swapi/models/CategoryResponseModel';
import ICategoryListItem from './models/ICategoryListItem';
import ILoadMoreEntity from '../../stores/swapi/models/ILoadMoreEntity';
import ICategoryViewData from './models/ICategoryViewData';

export class HomeSelector {

    public static getCategoryMenu(categories: ICategoriesResponse | null, currentCategory: string): ICategoryMenu[] {
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

    public static getCategoryDisplayList(
        currentCategory: string,
        swapiModelMap: {[swapiEnum: string]: ILoadMoreEntity} ,
    ): ICategoryViewData {
        const model: ILoadMoreEntity = swapiModelMap[currentCategory];

        if (!model) {
            return null;
        }

        return {
            displayCount: `${model.entity.length} / ${model.totalCount}`,
            loadMoreUrl: model.loadMoreUrl,
            items: model.entity.ids.map((id: string | number): ICategoryListItem => {
                const item: SwapiModelUnion = model.entity.entities[id];

                return {
                    id: item.id,
                    label: item.name,
                    category: currentCategory,
                    imageUrl: `/images/${currentCategory}/${item.id}.jpg`
                }
            }),
        }
    }
}

export const getCategoryMenu: Selector<IStore, ICategoryMenu[]> = createSelector(
    (state: IStore) => state.swapiReducer.categories,
    (state: IStore) => state.swapiReducer.currentCategory,
    HomeSelector.getCategoryMenu,
);

export const getCategoryDisplayList: Selector<IStore, ICategoryViewData> = createSelector(
    (state: IStore) => state.swapiReducer.currentCategory,
    (state: IStore) => ({
        [SwapiEnum.Films]: state.swapiReducer[SwapiEnum.Films] as ILoadMoreEntity,
        [SwapiEnum.People]: state.swapiReducer[SwapiEnum.People] as ILoadMoreEntity,
        [SwapiEnum.Planets]: state.swapiReducer[SwapiEnum.Planets] as ILoadMoreEntity,
        [SwapiEnum.Species]: state.swapiReducer[SwapiEnum.Species] as ILoadMoreEntity,
        [SwapiEnum.Starships]: state.swapiReducer[SwapiEnum.Starships] as ILoadMoreEntity,
        [SwapiEnum.Vehicles]: state.swapiReducer[SwapiEnum.Vehicles] as ILoadMoreEntity,
    }),
    HomeSelector.getCategoryDisplayList,
);

