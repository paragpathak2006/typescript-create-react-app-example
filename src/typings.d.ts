declare module 'environment' {
    const value: {
        isProduction: boolean;
        apiCacheTime: {
            duration: number;
            unit: 'seconds' | 'minutes' | 'hours' | 'days';
        }
        endpointUrl: {
            categories: string;
            topics: string;
        }
    };

    export default value;
}

declare module 'uuid/v3';
