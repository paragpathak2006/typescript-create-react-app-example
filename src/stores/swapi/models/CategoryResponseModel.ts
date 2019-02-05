import {BaseModel} from 'sjs-base-model';
import PersonModel from './PersonModel';
import IConstructor from '../../../models/IConstructor';
import FilmModel from './FilmModel';
import PlanetModel from './PlanetModel';
import SpeciesModel from './SpeciesModel';
import StarshipModel from './StarshipModel';
import VehicleModel from './VehicleModel';
import CategoryEnum from '../../../constants/CategoryEnum';

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
export default class CategoryResponseModel<T> extends BaseModel {

    public readonly count: number = null;
    public readonly next: string = '';
    public readonly previous: string = '';
    public readonly results: SwapiModelUnion[] = [];

    /*
     * Client-Side properties
     */
    public category: CategoryEnum = null;

    constructor(data: Partial<(CategoryResponseModel<T>)>, Model: IConstructor<T>, category: CategoryEnum) {
        super();

        this.results = [Model as any];
        this.category = category;
    
        this.update(data);
    }

    @log
    public update(data: Partial<(CategoryResponseModel<T>)>): void {
        super.update(data);
    }

    @asdf
    public request(): any {

    }
    
}

function asdf(target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) {
    // let originalMethod = descriptor.value;
// console.log(`originalMethod`, originalMethod);
    descriptor.value = function(...args: any[]) {
        // console.log(`${methodName}(before)`);
        //
        // const returnValue = originalMethod.apply(this, args);
        //
        // console.log(`args`, returnValue);
        //
        // console.log(`${methodName}(after)`);

        return this;
    }
}

function log(target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value;
    console.log(`originalMethod`, originalMethod);
    descriptor.value = function(...args: any[]) {
        console.log(`${methodName}(before)`);

        const returnValue = originalMethod.apply(this, args);

        console.log(`args`, args);

        console.log(`${methodName}(after)`);

        return returnValue;
    }
}

