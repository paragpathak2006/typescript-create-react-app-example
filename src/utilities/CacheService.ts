import ICache from '../models/ICache';
import differenceInSeconds from 'date-fns/difference_in_seconds';
import localforage from 'localforage';

export default class CacheService {

    public static readonly SECONDS: string = 'seconds';
    public static readonly MINUTES: string = 'minutes';
    public static readonly HOURS: string = 'hours';
    public static readonly DAYS: string = 'days';

    protected _timestampLimitInSeconds: number = 0;

    constructor(timestampLimitInSeconds: number = 0, unit: string = CacheService.SECONDS, namespace: string = 'CacheService.') {
        switch (unit) {
            case CacheService.SECONDS:
                this._timestampLimitInSeconds = timestampLimitInSeconds;
                break;
            case CacheService.MINUTES:
                this._timestampLimitInSeconds = timestampLimitInSeconds * 60;
                break;
            case CacheService.HOURS:
                this._timestampLimitInSeconds = timestampLimitInSeconds * 3600;
                break;
            case CacheService.DAYS:
                this._timestampLimitInSeconds = timestampLimitInSeconds * 86400;
                break;
            default:
                this._timestampLimitInSeconds = timestampLimitInSeconds;
        }
    }

    public async get(key: string): Promise<ICache> {
        try {
            const {value, expiration}: ICache = await this._getItem(key);
            const hasTimestampExpired: boolean = this._hasTimestampExpired(expiration);

            return {
                value,
                expiration,
                isExpired: this._timestampLimitInSeconds === 0 || hasTimestampExpired,
            };
        } catch (error) {
            return this._onError(error);
        }
    }

    public async set(key: string, value: any): Promise<Partial<ICache>> {
        try {
            const todayInMilliseconds: number = this._todayInMilliseconds();

            return this._setItem(key, {value, expiration: todayInMilliseconds});
        } catch (error) {
            return this._onError(error);
        }
    }

    public async remove(key: string): Promise<void> {
        try {
            return this._removeItem(key);
        } catch (error) {
            return this._onError(error);
        }
    }

    public async hasTimestampExpiredFor(key: string): Promise<boolean> {
        try {
            const {expiration}: ICache = await this._getItem(key);

            return this._hasTimestampExpired(expiration);
        } catch (error) {
            return this._onError(error);
        }
    }

    private _hasTimestampExpired(expiration: number = 0): boolean {
        const timestampInMilliseconds: number = expiration;
        const todayInMilliseconds: number = this._todayInMilliseconds();

        const timestampDifferenceInSeconds: number = differenceInSeconds(todayInMilliseconds, timestampInMilliseconds);
        const timeRemainingInSeconds: number = this._timestampLimitInSeconds - timestampDifferenceInSeconds;

        if (timeRemainingInSeconds <= 0) {
            return true;
        }

        return false;
    }

    private async _getItem(key: string): Promise<ICache> {
        const data: ICache = await localforage.getItem(key);

        return data || {} as any;
    }

    private async _setItem(key: string, value: ICache): Promise<ICache> {
        return localforage.setItem(key, value);
    }

    private async _removeItem(key: string): Promise<void> {
        return localforage.removeItem(key);
    }

    private _todayInMilliseconds(): number {
        return new Date().getTime();
    }

    private _onError(error: any): null {
        console.log(error);

        return null;
    }

}
