import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import IAction from '../../stores/IAction';
import IStore from '../../stores/IStore';
import MetaAction from '../../stores/meta/MetaAction';

export interface IProps extends DispatchProp<IAction<any>> {}
interface IState {}
interface IStateToProps {}

const mapStateToProps = (state: IStore): IStateToProps => ({});

class NotFound extends React.Component<IStateToProps & IProps, IState> {

    public componentDidMount(): void {
        this.props.dispatch(MetaAction.setMeta({title: '404 Page Not Found'}));
    }

    public render() {
        return (
            <div>
                {'404 Page Not Found'}
            </div>
        );
    }

}

export default connect(mapStateToProps)(NotFound);
