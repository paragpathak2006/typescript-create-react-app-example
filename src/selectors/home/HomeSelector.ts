import {createSelector, Selector} from 'reselect';
import IStore from '../../stores/IStore';
import ICategoriesResponse from '../../stores/swapi/models/ICategoriesResponse';
import ICategoryMenu from './models/ICategoryMenu';
import StringUtility from '../../utilities/StringUtility';
import CategoryEnum from '../../constants/CategoryEnum';
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
                    category: key as CategoryEnum,
                    apiEndpoint: categories[key],
                };
            });
    }

    public static getCategoryDisplayList(
        currentCategory: CategoryEnum,
        films: ILoadMoreEntity,
        people: ILoadMoreEntity,
        planets: ILoadMoreEntity,
        species: ILoadMoreEntity,
        starships: ILoadMoreEntity,
        vehicles: ILoadMoreEntity,
    ): ICategoryViewData {
        const categoryEntityMap: {[categoryEnum: string]: ILoadMoreEntity} = {
            films,
            people,
            planets,
            species,
            starships,
            vehicles,
        };
        const model: ILoadMoreEntity = categoryEntityMap[currentCategory];

        if (!model) {
            return null;
        }

        return {
            displayCount: `${model.entity.length} / ${model.totalCount}`,
            loadMoreUrl: model.loadMoreUrl,
            category: currentCategory,
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
    (state: IStore) => state.swapiReducer[CategoryEnum.Films],
    (state: IStore) => state.swapiReducer[CategoryEnum.People],
    (state: IStore) => state.swapiReducer[CategoryEnum.Planets],
    (state: IStore) => state.swapiReducer[CategoryEnum.Species],
    (state: IStore) => state.swapiReducer[CategoryEnum.Starships],
    (state: IStore) => state.swapiReducer[CategoryEnum.Vehicles],
    HomeSelector.getCategoryDisplayList,
);

