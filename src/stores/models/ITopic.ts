import IResource from './IResource';

export default interface ITopic {
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly resources: IResource[];
}
