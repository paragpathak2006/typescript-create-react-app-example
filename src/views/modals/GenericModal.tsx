import React from 'react';
import BaseModal from './BaseModal';
import {connect, DispatchProp} from 'react-redux';
import IAction from '../../stores/IAction';
import IStore from '../../stores/IStore';
import ModalAction from '../../stores/modal/ModalAction';

export interface IProps<T> extends DispatchProp<IAction<any>> {
    readonly isRequired?: boolean;
    readonly message: string;
    readonly rejectLabel?: string;
    readonly acceptLabel?: string;
    readonly modalData?: T;
    readonly onAccept?: (props: IProps<T>) => void;
    readonly onReject?: (props: IProps<T>) => void;
}
interface IState {}
interface IStateToProps {}

const mapStateToProps = (state: IStore) => ({});

type PropsUnion = IStateToProps & IProps<any>;

class GenericModal extends React.Component<PropsUnion, IState> {

    public static defaultProps: Partial<PropsUnion> = {
        modalData: null,
    };

    public render(): JSX.Element {
        return (
            <BaseModal isRequired={this.props.isRequired}>
                <section className="modal-content">
                    <div className="modal-body">
                        {this.props.message}
                    </div>
                    <div className="modal-footer">
                        {this.props.rejectLabel && (
                            <button
                                onClick={this.props.onReject ? this._onReject : this._onClose}
                            >
                                {this.props.rejectLabel}
                            </button>
                        )}
                        {this.props.acceptLabel && (
                            <button
                                onClick={this.props.onAccept ? this._onAccept : this._onClose}
                            >
                                {this.props.acceptLabel}
                            </button>
                        )}
                    </div>
                </section>
            </BaseModal>
        );
    }

    private _onReject = (): void => {
        this.props.onReject(this.props);
    }

    private _onAccept = (): void => {
        this.props.onAccept(this.props);
    }

    private _onClose = (): void => {
        this.props.dispatch(ModalAction.closeModal());
    }

}

export default connect(mapStateToProps)(GenericModal);
