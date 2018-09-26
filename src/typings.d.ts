declare namespace NodeJS {
    interface Global {
        document: Document;
        window: Window;
        navigator: Navigator;
    }
}

declare module "*.json" {
    const value: any;
    export default value;
}

declare module '*.css';
declare module '*.scss';

declare module 'environment' {
    const value: {
        isProduction: boolean;
        endpointUrl: {
            topics: string;
        }
    };

    export default value;
}
