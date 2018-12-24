import {BaseModel} from 'sjs-base-model';
import SpeciesModel from './SpeciesModel';
    
/*
    // Returned Api Data Sample
    {
      "count": 37,
      "next": "https://swapi.co/api/species/?page=2",
      "previous": null,
      "results": [
        {
          "name": "Hutt",
          "classification": "gastropod",
          "designation": "sentient",
          "average_height": "300",
          "skin_colors": "green, brown, tan",
          "hair_colors": "n/a",
          "eye_colors": "yellow, red",
          "average_lifespan": "1000",
          "homeworld": "https://swapi.co/api/planets/24/",
          "language": "Huttese",
          "people": [
            "https://swapi.co/api/people/16/"
          ],
          "films": [
            "https://swapi.co/api/films/3/",
          ],
          "created": "2014-12-10T17:12:50.410000Z",
          "edited": "2014-12-20T21:36:42.146000Z",
          "url": "https://swapi.co/api/species/5/"
        },
      ]
    }
 */
export default class SpeciesResponseModel extends BaseModel {

    public readonly count: number = null;
    public readonly next: string = '';
    public readonly previous: string = '';
    public readonly results: SpeciesModel[] = [SpeciesModel as any];

    constructor(data: Partial<SpeciesResponseModel>) {
        super();
    
        this.update(data);
    }
    
    public update(data: Partial<SpeciesResponseModel>): void {
        super.update(data);
    }
    
}
