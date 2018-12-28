import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import IAction from '../../stores/IAction';
import IStore from '../../stores/IStore';
import KeyboardKeyEnum from '../../constants/KeyboardKeyEnum';
import ModalAction from '../../stores/modal/ModalAction';

interface IProps extends DispatchProp<IAction<any>> {
    readonly isRequired?: boolean;
}
interface IState {}
interface IStateToProps {}

const mapStateToProps = (state: IStore) => ({});

type PropsUnion = IStateToProps & IProps;

class BaseModal extends React.Component<PropsUnion, IState> {

    public static defaultProps: Partial<PropsUnion> = {
        isRequired: false,
    };

    public componentDidMount(): void {
        if (!this.props.isRequired) {
            window.addEventListener('keydown', this._onKeyDownModal);
        }
    }

    public componentWillUnmount(): void {
        if (!this.props.isRequired) {
            window.removeEventListener('keydown', this._onKeyDownModal);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="modal-open">
                <div
                    className="modal"
                    id="modal"
                    role="dialog"
                    tabIndex={-1}
                >
                    <div
                        className="modal-dialog"
                        role="document"
                    >
                        {this.props.children}
                    </div>
                </div>
                <div
                    className="modal-backdrop"
                    onClick={this._onClickOverlay}
                />
            </div>
        );
    }

    private _onClickOverlay = (event: React.MouseEvent<HTMLElement>): void => {
        if (!this.props.isRequired) {
            this.props.dispatch(ModalAction.closeModal());
        }
    }

    private _onKeyDownModal = (event: KeyboardEvent): void => {
        if (event.key === KeyboardKeyEnum.ESCAPE) {
            event.preventDefault();

            this.props.dispatch(ModalAction.closeModal());
        }
    }

    // private _buildModalOverlayClassames(): string {
    //     return classNames({
    //         'modal-overlay': true,
    //         'modal-overlay_required': this.props.isRequired,
    //     });
    // }

}

export default connect(mapStateToProps)(BaseModal);

