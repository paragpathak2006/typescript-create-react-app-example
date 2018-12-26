import {createSelector, Selector} from 'reselect';
import IStore from '../../stores/IStore';
import CategoriesResponseModel from '../../stores/swapi/models/CategoriesResponseModel';
import ICategoryMenu from './models/ICategoryMenu';
import StringUtility from '../../utilities/StringUtility';
import SwapiEnum from '../../constants/SwapiEnum';
import CategoryResponseModel from '../../stores/swapi/models/CategoryResponseModel';
import FilmModel from '../../stores/swapi/models/FilmModel';
import PersonModel from '../../stores/swapi/models/PersonModel';
import PlanetModel from '../../stores/swapi/models/PlanetModel';
import SpeciesModel from '../../stores/swapi/models/SpeciesModel';
import StarshipModel from '../../stores/swapi/models/StarshipModel';
import VehicleModel from '../../stores/swapi/models/VehicleModel';

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

    public static getCategoryDisplay(
        currentCategory: string,
        films: CategoryResponseModel<FilmModel>,
        people: CategoryResponseModel<PersonModel>,
        planets: CategoryResponseModel<PlanetModel>,
        species: CategoryResponseModel<SpeciesModel>,
        starships: CategoryResponseModel<StarshipModel>,
        vehicles: CategoryResponseModel<VehicleModel>,
    ): any[] {
        // const map: {[swapiEnum: string]: IConstructor<SwapiModelUnion>} = {
        //     [SwapiEnum.People]: PersonModel,
        //     [SwapiEnum.Planets]: PlanetModel,
        //     [SwapiEnum.Starships]: StarshipModel,
        //     [SwapiEnum.Vehicles]: VehicleModel,
        //     [SwapiEnum.Species]: SpeciesModel,
        //     [SwapiEnum.Films]: FilmModel,
        // };

console.log(`currentCategory`, currentCategory);
        return [];
    }

}

export const getCategoryMenu: Selector<IStore, ICategoryMenu[]> = createSelector(
    (state: IStore) => state.swapiReducer.categories,
    (state: IStore) => state.swapiReducer.currentCategory,
    HomeSelector.getCategoryMenu,
);


export const getCategoryDisplay: Selector<IStore, ICategoryMenu[]> = createSelector(
    (state: IStore) => state.swapiReducer.currentCategory,
    (state: IStore) => state.swapiReducer[SwapiEnum.Films] as CategoryResponseModel<FilmModel>,
    (state: IStore) => state.swapiReducer[SwapiEnum.People] as CategoryResponseModel<PersonModel>,
    (state: IStore) => state.swapiReducer[SwapiEnum.Planets] as CategoryResponseModel<PlanetModel>,
    (state: IStore) => state.swapiReducer[SwapiEnum.Species] as CategoryResponseModel<SpeciesModel>,
    (state: IStore) => state.swapiReducer[SwapiEnum.Starships] as CategoryResponseModel<StarshipModel>,
    (state: IStore) => state.swapiReducer[SwapiEnum.Vehicles] as CategoryResponseModel<VehicleModel>,
    HomeSelector.getCategoryDisplay,
);

