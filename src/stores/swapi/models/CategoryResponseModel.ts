import {BaseModel} from 'sjs-base-model';
import PersonModel from './PersonModel';
import {IConstructor} from '../../../models/IConstructor';
import FilmModel from './FilmModel';
import PlanetModel from './PlanetModel';
import SpeciesModel from './SpeciesModel';
import StarshipModel from './StarshipModel';
import VehicleModel from './VehicleModel';

export type SwapiModelUnion = FilmModel | PersonModel | PlanetModel | SpeciesModel | StarshipModel | VehicleModel;

/*
    // Returned Api Data Sample
    {
      "count": 87,
      "next": "https://swapi.co/api/people/?page=2",
      "previous": null,
      "results": []
    }
 */
export default class CategoryResponseModel extends BaseModel {

    public readonly count: number = null;
    public readonly next: string = '';
    public readonly previous: string = '';
    public readonly results: SwapiModelUnion[] = [];

    constructor(data: Partial<CategoryResponseModel>, Model: IConstructor<SwapiModelUnion>) {
        super();

        this.results = [Model as any];
    
        this.update(data);
    }
    
    public update(data: Partial<CategoryResponseModel>): void {
        super.update(data);
    }
    
}
