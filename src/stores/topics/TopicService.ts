import HttpUtility from '../../utilities/HttpUtility';
import ITopic from './models/ITopic';
import {AxiosResponse} from 'axios';
import environment from 'environment';

export default class TopicService {

    private static _http: HttpUtility = new HttpUtility();

    public static async loadTopics(): Promise<ITopic[]> {
        const endpoint: string = environment.endpointUrl.topics;
        const response: AxiosResponse = await TopicService._http.get(endpoint);
        
        return response.data;
    }

}
