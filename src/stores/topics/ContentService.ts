import HttpUtility from '../../utilities/HttpUtility';

export default class ContentService {

    private static _http: HttpUtility = new HttpUtility();

    public static async loadContent(): Promise<any> {
        const endpoint: string = '/data/content.json';

        return ContentService._http.get(endpoint);
    }

}
