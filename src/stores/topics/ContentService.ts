import HttpUtility from '../../utilities/HttpUtility';
import ITopic from './models/ITopic';
import {AxiosResponse} from 'axios';

export default class ContentService {

    private static _http: HttpUtility = new HttpUtility();

    public static async loadContent(): Promise<ITopic[]> {
        const endpoint: string = '/data/content.json';
        const response: AxiosResponse = await ContentService._http.get(endpoint);

        return response.data;
    }

}
