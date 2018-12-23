import {BaseModel} from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
        "people": "https://swapi.co/api/people/",
        "planets": "https://swapi.co/api/planets/",
        "films": "https://swapi.co/api/films/",
        "species": "https://swapi.co/api/species/",
        "vehicles": "https://swapi.co/api/vehicles/",
        "starships": "https://swapi.co/api/starships/"
    }
 */
export default class CategoriesResponseModel extends BaseModel {

    public readonly people: string = '';
    public readonly planets: string = '';
    public readonly films: string = '';
    public readonly species: string = '';
    public readonly vehicles: string = '';
    public readonly starships: string = '';

    constructor(data: Partial<CategoriesResponseModel>) {
        super();

        this.update(data);
    }

    public update(data: Partial<CategoriesResponseModel>): void {
        super.update(data);
    }

}
