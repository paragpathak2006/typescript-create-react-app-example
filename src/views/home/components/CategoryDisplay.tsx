import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IAction from '../../../stores/IAction';
import IStore from '../../../stores/IStore';

interface IState {}
interface IProps {}
interface IStateToProps {}
interface IDispatchToProps {
    dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (state: IStore): IStateToProps => ({});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
    dispatch,
});

class CategoryDisplay extends React.Component<IStateToProps & IDispatchToProps & IProps, IState> {

    public render(): JSX.Element {
        return (
            <div>
                characters
                planets
                starships
                vehicles
                species
                films
                residents
                people
                pilots
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDisplay);
