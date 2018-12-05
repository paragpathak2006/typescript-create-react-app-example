declare module 'environment' {
    const value: {
        isProduction: boolean;
        endpointUrl: {
            topics: string;
        }
    };

    export default value;
}
