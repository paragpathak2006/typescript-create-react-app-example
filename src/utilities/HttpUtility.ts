export enum RequestMethod {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Delete = 'DELETE',
    Options = 'OPTIONS',
    Head = 'HEAD',
    Patch = 'PATCH',
}

// http://httpstat.us
// https://davidwalsh.name/fetch
export default class HttpUtility {

    public async get(endpoint: string): Promise<any> {
        const request = new Request(endpoint, {
            method: RequestMethod.Get,
        });

        return this._fetch(request);
    }

    public async post(endpoint: string): Promise<any> {
        const request = new Request(endpoint, {
            method: RequestMethod.Post,
        });

        return this._fetch(request);
    }

    public async put(endpoint: string): Promise<any> {
        const request = new Request(endpoint, {
            method: RequestMethod.Put,
        });

        return this._fetch(request);
    }

    public async delete(endpoint: string): Promise<any> {
        const request = new Request(endpoint, {
            method: RequestMethod.Delete,
        });

        return this._fetch(request);
    }

    private async _fetch(request: Request, init?: RequestInit): Promise<Response> {
        try {
            const response: Response = await fetch(request, init);

            return response.json();
        } catch (error) {
            console.log(`error`, error);

            return error;
        }
    }

}
