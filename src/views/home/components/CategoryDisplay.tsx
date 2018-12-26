import styles from './CategoryDisplay.module.scss';

import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IAction from '../../../stores/IAction';
import IStore from '../../../stores/IStore';
import ICategoryListItem from '../../../selectors/home/models/ICategoryListItem';
import {getCategoryDisplayList} from '../../../selectors/home/HomeSelector';
import SwapiEnum from '../../../constants/SwapiEnum';
import SwapiAction from '../../../stores/swapi/SwapiAction';

interface IState {}
interface IProps {}
interface IStateToProps {
    categoryItems: ICategoryListItem[],
}
interface IDispatchToProps {
    dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (state: IStore): IStateToProps => ({
    categoryItems: getCategoryDisplayList(state),
});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
    dispatch,
});

class CategoryDisplay extends React.Component<IStateToProps & IDispatchToProps & IProps, IState> {

    public render(): JSX.Element {
        return (
            <ul className={styles.container}>
                {this.props.categoryItems.map((item: ICategoryListItem) =>
                    <li
                        key={item.label}
                        className={styles.item}
                    >
                        <button
                            onClick={this._onClickItem}
                            data-category-id={item.category}
                            data-item-id={item.id}
                        >
                            <img src={item.imageUrl} alt={item.label} />
                            <div>
                                {item.label}
                            </div>
                        </button>
                    </li>
                )}
            </ul>
        );
    }

    private _onClickItem = (event: React.MouseEvent<HTMLButtonElement>) => {
        const categoryId: SwapiEnum = event.currentTarget.getAttribute('data-category-id') as SwapiEnum;
        const itemId: string = event.currentTarget.getAttribute('data-item-id');

        this.props.dispatch(SwapiAction.loadDetails(itemId, categoryId));
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDisplay);
