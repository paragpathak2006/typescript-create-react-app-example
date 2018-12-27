import CategoryEnum from '../constants/CategoryEnum';
import {SwapiModelUnion} from '../stores/swapi/models/CategoryResponseModel';
import {IConstructor} from '../models/IConstructor';
import PersonModel from '../stores/swapi/models/PersonModel';
import PlanetModel from '../stores/swapi/models/PlanetModel';
import StarshipModel from '../stores/swapi/models/StarshipModel';
import VehicleModel from '../stores/swapi/models/VehicleModel';
import SpeciesModel from '../stores/swapi/models/SpeciesModel';
import FilmModel from '../stores/swapi/models/FilmModel';

export default class SwapiUtility {
    /**
     * Takes the last number value from the url
     * Sample url: "https://swapi.co/api/vehicles/4/"
     *
     * @param url
     */
    public static getIdFromUrl(url: string): string {
        return url.split('/').filter(Boolean).pop();
    }

    public static getModelForCreation(category: CategoryEnum): IConstructor<SwapiModelUnion> {
        const map: {[swapiEnum: string]: IConstructor<SwapiModelUnion>} = {
            [CategoryEnum.People]: PersonModel,
            [CategoryEnum.Planets]: PlanetModel,
            [CategoryEnum.Starships]: StarshipModel,
            [CategoryEnum.Vehicles]: VehicleModel,
            [CategoryEnum.Species]: SpeciesModel,
            [CategoryEnum.Films]: FilmModel,
        };

        return map[category];
    }

}
