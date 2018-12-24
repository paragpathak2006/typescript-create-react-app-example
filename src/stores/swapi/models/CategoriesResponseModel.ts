import {BaseModel} from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
        "films": "https://swapi.co/api/films/",
        "people": "https://swapi.co/api/people/",
        "planets": "https://swapi.co/api/planets/",
        "species": "https://swapi.co/api/species/",
        "starships": "https://swapi.co/api/starships/",
        "vehicles": "https://swapi.co/api/vehicles/"
    }
 */
export default class CategoriesResponseModel extends BaseModel {

    public readonly films: string = '';
    public readonly people: string = '';
    public readonly planets: string = '';
    public readonly species: string = '';
    public readonly starships: string = '';
    public readonly vehicles: string = '';

    constructor(data: Partial<CategoriesResponseModel>) {
        super();

        this.update(data);
    }

    public update(data: Partial<CategoriesResponseModel>): void {
        super.update(data);
    }

}
