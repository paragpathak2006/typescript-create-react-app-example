import React from 'react';
import BaseModal from './BaseModal';
import {connect, DispatchProp} from 'react-redux';
import IAction from '../../stores/IAction';
import IStore from '../../stores/IStore';
import ModalAction from '../../stores/modal/ModalAction';

export interface IProps<T> {
    readonly modalData?: T;
}
interface IState {}
interface IStateToProps {}

const mapStateToProps = (state: IStore, ownProps: IProps<any>): IStateToProps => ({});

class DetailsModal extends React.Component<IProps<any> & IStateToProps & DispatchProp<IAction<any>>, IState> {

    public static defaultProps: IProps<any> = {
        modalData: null,
    };

    public render(): JSX.Element {
        return (
            <BaseModal isRequired={false}>
                <section className="modal-content">
                    <div className="modal-body">
                        this is the body
                    </div>
                    <div className="modal-footer">
                        <button onClick={this._onClose}>
                            Close
                        </button>
                    </div>
                </section>
            </BaseModal>
        );
    }

    private _onClose = (): void => {
        this.props.dispatch(ModalAction.closeModal());
    }

}

export default connect(mapStateToProps)(DetailsModal);
