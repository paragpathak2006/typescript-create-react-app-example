declare module 'environment' {
    const value: {
        isProduction: boolean;
        endpointUrl: {
            categories: string;
            topics: string;
        }
    };

    export default value;
}

declare module 'uuid/v3';
