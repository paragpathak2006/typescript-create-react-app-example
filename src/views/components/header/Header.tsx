import styles from './Header.module.scss';

import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IAction from '../../../stores/IAction';
import IStore from '../../../stores/IStore';
import {Link} from 'react-router-dom';
import RouteEnum from '../../../constants/RouteEnum';
import GenericModal from '../../modals/GenericModal';
import ModalAction from '../../../stores/modal/ModalAction';

interface IProps {}
interface IState {}
interface IStateToProps {}
interface IDispatchToProps {
    readonly dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (state: IStore): IStateToProps => ({});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
    dispatch,
});

class Header extends React.PureComponent<IStateToProps & IDispatchToProps & IProps, IState> {

    public render(): JSX.Element {
        return (
            <>
                <div className={styles.header}>
                    <ul className={styles.menu}>
                        <li><Link to={RouteEnum.Home}>Home</Link></li>
                        <li><Link to={RouteEnum.Topics}>Topics</Link></li>
                    </ul>
                    <button className="btn" onClick={this._addModal}>Show Modal</button>
                </div>
                <hr />
            </>
        );
    }

    private _addModal = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
