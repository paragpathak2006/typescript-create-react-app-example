import {createSelector, Selector} from 'reselect';
import IStore from '../../stores/IStore';
import ICategoriesResponse from '../../stores/swapi/models/ICategoriesResponse';
import ICategoryMenu from './models/ICategoryMenu';
import StringUtility from '../../utilities/StringUtility';
import SwapiEnum from '../../constants/SwapiEnum';
import CategoryResponseModel, {SwapiModelUnion} from '../../stores/swapi/models/CategoryResponseModel';
import FilmModel from '../../stores/swapi/models/FilmModel';
import PersonModel from '../../stores/swapi/models/PersonModel';
import PlanetModel from '../../stores/swapi/models/PlanetModel';
import SpeciesModel from '../../stores/swapi/models/SpeciesModel';
import StarshipModel from '../../stores/swapi/models/StarshipModel';
import VehicleModel from '../../stores/swapi/models/VehicleModel';
import ICategoryListItem from './models/ICategoryListItem';

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
        swapiModelMap: {[swapiEnum: string]: CategoryResponseModel<SwapiModelUnion>} ,
    ): ICategoryListItem[] {
        const categoryResponseModel: CategoryResponseModel<SwapiModelUnion> = swapiModelMap[currentCategory];

        if (!categoryResponseModel || !categoryResponseModel.results) {
            return [];
        }

        return categoryResponseModel.results.map((model: SwapiModelUnion): ICategoryListItem => {
            return {
                id: model.id,
                label: model.name,
                category: currentCategory,
                imageUrl: `/images/${currentCategory}/${model.id}.jpg`
            }
        });
    }

}

export const getCategoryMenu: Selector<IStore, ICategoryMenu[]> = createSelector(
    (state: IStore) => state.swapiReducer.categories,
    (state: IStore) => state.swapiReducer.currentCategory,
    HomeSelector.getCategoryMenu,
);

export const getCategoryDisplayList: Selector<IStore, ICategoryListItem[]> = createSelector(
    (state: IStore) => state.swapiReducer.currentCategory,
    (state: IStore) => ({
        [SwapiEnum.Films]: state.swapiReducer[SwapiEnum.Films] as CategoryResponseModel<FilmModel>,
        [SwapiEnum.People]: state.swapiReducer[SwapiEnum.People] as CategoryResponseModel<PersonModel>,
        [SwapiEnum.Planets]: state.swapiReducer[SwapiEnum.Planets] as CategoryResponseModel<PlanetModel>,
        [SwapiEnum.Species]: state.swapiReducer[SwapiEnum.Species] as CategoryResponseModel<SpeciesModel>,
        [SwapiEnum.Starships]: state.swapiReducer[SwapiEnum.Starships] as CategoryResponseModel<StarshipModel>,
        [SwapiEnum.Vehicles]: state.swapiReducer[SwapiEnum.Vehicles] as CategoryResponseModel<VehicleModel>,
    }),
    HomeSelector.getCategoryDisplayList,
);

