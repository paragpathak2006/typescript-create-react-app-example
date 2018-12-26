import HttpUtility from '../../utilities/HttpUtility';
import {AxiosResponse} from 'axios';
import environment from 'environment';
import CategoriesResponseModel from './models/CategoriesResponseModel';
import CategoryResponseModel, {SwapiModelUnion} from './models/CategoryResponseModel';
import {IConstructor} from '../../models/IConstructor';
import SwapiUtility from '../../utilities/SwapiUtility';
import SwapiEnum from '../../constants/SwapiEnum';

export default class SwapiService {

    private static _http: HttpUtility = new HttpUtility();

    public static async loadCategories(): Promise<CategoriesResponseModel> {
        const endpoint: string = environment.endpointUrl.categories;
        const response: AxiosResponse = await SwapiService._http.get(endpoint);

        return response.data;
    }

    public static async loadCategory(endpoint: string, categoryId: SwapiEnum): Promise<CategoryResponseModel<SwapiModelUnion>> {
        const response: AxiosResponse = await SwapiService._http.get(endpoint);

        const Model: IConstructor<SwapiModelUnion> = SwapiUtility.getModelForCreation(categoryId);

        return new CategoryResponseModel(response.data, Model);
    }

}
