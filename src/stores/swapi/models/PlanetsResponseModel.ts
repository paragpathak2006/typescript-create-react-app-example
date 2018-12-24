import {BaseModel} from 'sjs-base-model';
import PlanetModel from './PlanetModel';
    
/*
    // Returned Api Data Sample
    {
      "count": 61,
      "next": "https://swapi.co/api/planets/?page=2",
      "previous": null,
      "results": [
        {
          "name": "Alderaan",
          "rotation_period": "24",
          "orbital_period": "364",
          "diameter": "12500",
          "climate": "temperate",
          "gravity": "1 standard",
          "terrain": "grasslands, mountains",
          "surface_water": "40",
          "population": "2000000000",
          "residents": [
            "https://swapi.co/api/people/5/",
          ],
          "films": [
            "https://swapi.co/api/films/6/",
          ],
          "created": "2014-12-10T11:35:48.479000Z",
          "edited": "2014-12-20T20:58:18.420000Z",
          "url": "https://swapi.co/api/planets/2/"
        },
      ]
    }
 */
export default class PlanetsResponseModel extends BaseModel {

    public readonly count: number = null;
    public readonly next: string = '';
    public readonly previous: string = '';
    public readonly results: PlanetModel[] = [PlanetModel as any];

    constructor(data: Partial<PlanetsResponseModel>) {
        super();
    
        this.update(data);
    }
    
    public update(data: Partial<PlanetsResponseModel>): void {
        super.update(data);
    }
    
}
