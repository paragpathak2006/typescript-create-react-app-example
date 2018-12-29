import * as React from 'react';
import SpeciesModel from '../../../stores/swapi/models/SpeciesModel';

interface IState {}
interface IProps {
    readonly model: SpeciesModel;
}

export default class SpeciesDetails extends React.Component<IProps, IState> {

    public static defaultProps: Partial<IProps> = {
    };

    public state: IState = {
    };

    public render(): JSX.Element {
        const {model} = this.props;

        return (
            <div>
                <p>{model.name}</p>
            </div>
        )
    }

}
