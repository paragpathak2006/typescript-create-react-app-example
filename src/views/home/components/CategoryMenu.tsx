import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IAction from '../../../stores/IAction';
import IStore from '../../../stores/IStore';
import ICategoryMenu from '../../../selectors/home/models/ICategoryMenu';
import {getCategoryMenu} from '../../../selectors/home/HomeSelector';
import SwapiAction from '../../../stores/swapi/SwapiAction';
import classNames from 'classnames';
import CategoryEnum from '../../../constants/CategoryEnum';

interface IState {}
interface IProps {}
interface IStateToProps {
    menuItems: ICategoryMenu[];
}
interface IDispatchToProps {
    dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (state: IStore): IStateToProps => ({
    menuItems: getCategoryMenu(state),
});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
    dispatch,
});

class CategoryMenu extends React.PureComponent<IStateToProps & IDispatchToProps & IProps, IState> {

    // http://zerosixthree.se/detecting-media-queries-with-javascript/
    // https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript

    public render(): JSX.Element {
        return (
            <div className="pure-menu pure-menu-horizontal">
                <ul className="pure-menu-list">
                    {this.props.menuItems.map((item: ICategoryMenu) => {
                        const cssClasses: string = classNames({
                            'pure-button': true,
                            'pure-button-active': item.isActive,
                        });

                        return (
                            <li
                                key={item.category}
                                className="pure-menu-item"
                            >
                                <button
                                    className={cssClasses}
                                    type="button"
                                    onClick={this._onClickMenu}
                                    data-category={item.category}
                                    data-endpoint={item.apiEndpoint}
                                >
                                    {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    private _onClickMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const category: CategoryEnum = event.currentTarget.getAttribute('data-category') as CategoryEnum;
        const apiEndpoint: string = event.currentTarget.getAttribute('data-endpoint');

        this.props.dispatch(SwapiAction.loadCategory({
            apiEndpoint,
            category,
        }));
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
