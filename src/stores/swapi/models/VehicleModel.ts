import {BaseModel} from 'sjs-base-model';
import StringUtility from '../../../utilities/StringUtility';

/*
    // Returned Api Data Sample
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
    }
 */
export default class VehicleModel extends BaseModel {

    public readonly name: string = '';
    public readonly model: string = '';
    public readonly url: string = '';

    /*
     * Client-Side properties
     */
    public id: string = '';

    constructor(data: Partial<VehicleModel>) {
        super();
    
        this.update(data);
    }
    
    public update(data: Partial<VehicleModel>): void {
        super.update(data);

        this.id = StringUtility.getIdFromUrl(this.url);
    }
    
}
