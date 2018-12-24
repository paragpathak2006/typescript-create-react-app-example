import {BaseModel} from 'sjs-base-model';
import StringUtility from '../../../utilities/StringUtility';
    
/*
    // Returned Api Data Sample
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [
        "https://swapi.co/api/people/1/",
      ],
      "planets": [
        "https://swapi.co/api/planets/2/",
      ],
      "starships": [
        "https://swapi.co/api/starships/2/",
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/4/",
      ],
      "species": [
        "https://swapi.co/api/species/5/",
      ],
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2015-04-11T09:46:52.774897Z",
      "url": "https://swapi.co/api/films/1/"
    }
 */
export default class FilmModel extends BaseModel {

    public readonly title: string = '';
    public readonly director: string = '';
    public readonly url: string = '';

    /*
     * Client-Side properties
     */
    public id: string = '';

    constructor(data: Partial<FilmModel>) {
        super();

        this.update(data);
    }

    public update(data: Partial<FilmModel>): void {
        super.update(data);

        this.id = StringUtility.getIdFromUrl(this.url);
    }
    
}
