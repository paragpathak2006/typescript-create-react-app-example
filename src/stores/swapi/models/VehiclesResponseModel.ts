import {BaseModel} from 'sjs-base-model';
import StarshipModel from './StarshipModel';
    
/*
    // Returned Api Data Sample
    {
      "count": 39,
      "next": "https://swapi.co/api/vehicles/?page=2",
      "previous": null,
      "results": [
        {
          "name": "Sand Crawler",
          "model": "Digger Crawler",
          "manufacturer": "Corellia Mining Corporation",
          "cost_in_credits": "150000",
          "length": "36.8",
          "max_atmosphering_speed": "30",
          "crew": "46",
          "passengers": "30",
          "cargo_capacity": "50000",
          "consumables": "2 months",
          "vehicle_class": "wheeled",
          "pilots": [],
          "films": [
            "https://swapi.co/api/films/5/",
          ],
          "created": "2014-12-10T15:36:25.724000Z",
          "edited": "2014-12-22T18:21:15.523587Z",
          "url": "https://swapi.co/api/vehicles/4/"
        },
      ]
    }
 */
export default class VehiclesResponseModel extends BaseModel {

    public readonly count: number = null;
    public readonly next: string = '';
    public readonly previous: string = '';
    public readonly results: StarshipModel[] = [StarshipModel as any];

    constructor(data: Partial<VehiclesResponseModel>) {
        super();
    
        this.update(data);
    }
    
    public update(data: Partial<VehiclesResponseModel>): void {
        super.update(data);
    }
    
}
