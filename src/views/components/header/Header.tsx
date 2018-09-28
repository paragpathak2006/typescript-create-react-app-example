import styles from './header.module.scss';

import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IAction from '../../../stores/IAction';
import IStore from '../../../stores/IStore';
import {Link} from 'react-router-dom';
import RouteEnum from '../../../constants/RouteEnum';
import GenericModal from '../../modals/GenericModal';
import ModalAction from '../../../stores/modal/ModalAction';

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

class Header extends React.Component<IStateToProps & IDispatchToProps & IProps, IState> {

    public static defaultProps: Partial<IProps> = {
    };

    public state: IState = {
    };

    private _addModalHandler: (event: React.MouseEvent<HTMLButtonElement>) => void = this._addModal.bind(this);

    public render(): JSX.Element {
        return (
            <>
                <div className={styles.header}>
                    <ul className={styles.menu}>
                        <li><Link to={RouteEnum.Home}>Home</Link></li>
                        <li><Link to={RouteEnum.Topics}>Topics</Link></li>
                    </ul>
                    <button className="btn" onClick={this._addModalHandler}>Show Modal</button>
                </div>
                <hr />
            </>
        );
    }

    private async _addModal(event: React.MouseEvent<HTMLButtonElement>): Promise<void> {
        const modal: JSX.Element = (
            <GenericModal
                isRequired={true}
                acceptLabel={'Delete'}
                rejectLabel={'Cancel'}
                message={'This is the modal message passed in.'}
            />
        );

        this.props.dispatch(ModalAction.addModal(modal));
    }

}

export default connect<IStateToProps, IDispatchToProps, IProps>(mapStateToProps, mapDispatchToProps)(Header);
