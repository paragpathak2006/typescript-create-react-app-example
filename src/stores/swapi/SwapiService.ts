import HttpUtility from '../../utilities/HttpUtility';
import {AxiosResponse} from 'axios';
import environment from 'environment';
import CategoriesResponseModel from './models/CategoriesResponseModel';

export default class SwapiService {

    private static _http: HttpUtility = new HttpUtility();

    public static async loadCategories(): Promise<CategoriesResponseModel> {
        const endpoint: string = environment.endpointUrl.categories;
        const response: AxiosResponse = await SwapiService._http.get(endpoint);

        return response.data;
    }

}
