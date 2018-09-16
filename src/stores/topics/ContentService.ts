import HttpUtility from '../../utilities/HttpUtility';
import ITopic from './models/ITopic';

export default class ContentService {

    private static _http: HttpUtility = new HttpUtility();

    public static async loadContent(): Promise<ITopic[]> {
        const endpoint: string = '/data/content.json';

        return ContentService._http.get(endpoint);
    }

}
