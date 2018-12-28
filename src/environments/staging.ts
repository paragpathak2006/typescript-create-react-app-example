import environment from './production';
import CacheService from '../utilities/CacheService';

export default {
    apiCacheTime: {
        duration: 8,
        unit: CacheService.HOURS,
    },
    endpointUrl: {
        ...environment.endpointUrl,
        // override any endpoints
    },
    isProduction: false,
};
