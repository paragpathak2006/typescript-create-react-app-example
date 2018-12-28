import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import IStore from '../../stores/IStore';
import IAction from '../../stores/IAction';

interface IProps extends DispatchProp<IAction<any>> {}
interface IState {}
interface IStateToProps {
    readonly currentModal: JSX.Element;
}

const mapStateToProps = (state: IStore): IStateToProps => ({
    currentModal: state.modalReducer.currentModal,
});

class ModalHub extends React.Component<IStateToProps & IProps, IState> {

    public render(): JSX.Element {
        return this.props.currentModal;
    }

}

export default connect(mapStateToProps)(ModalHub);
