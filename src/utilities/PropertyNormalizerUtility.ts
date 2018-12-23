import {Util} from 'sjs-base-model';
import StringUtility from './StringUtility';

export default class PropertyNormalizerUtility {

    public static normalize(json: object): object {
        const dataOrEmptyObject: object = json ? json : {};
        // Makes all property names camelCase so they are consistent in the application.
        // Also recursively goes through child objects.
        return Util.clone(dataOrEmptyObject, StringUtility.toCamelCase);
    }

}
