import {BaseModel} from 'sjs-base-model';
import StringUtility from '../../../utilities/StringUtility';
    
/*
    // Returned Api Data Sample
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
    }
 */
export default class SpeciesModel extends BaseModel {

    public readonly name: string = '';
    public readonly classification: string = '';
    public readonly url: string = '';

    /*
     * Client-Side properties
     */
    public id: string = '';

    constructor(data: Partial<SpeciesModel>) {
        super();

        this.update(data);
    }

    public update(data: Partial<SpeciesModel>): void {
        super.update(data);

        this.id = StringUtility.getIdFromUrl(this.url);
    }
    
}
