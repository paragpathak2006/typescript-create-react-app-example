import HttpUtility from '../../utilities/HttpUtility';
import ITopic from './models/ITopic';
import {AxiosResponse} from 'axios';
import * as config from 'config';

export default class ContentService {

    private static _http: HttpUtility = new HttpUtility();

    public static async loadContent(): Promise<ITopic[]> {
        const endpoint: string = config.endpointUrl.topics;
        const response: AxiosResponse = await ContentService._http.get(endpoint);

        return response.data;
    }

}
