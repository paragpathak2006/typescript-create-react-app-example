import styles from './CategoryDisplay.module.scss';

import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IAction from '../../../stores/IAction';
import IStore from '../../../stores/IStore';
import ICategoryListItem from '../../../selectors/home/models/ICategoryListItem';
import {getCategoryDisplayList} from '../../../selectors/home/HomeSelector';
import CategoryEnum from '../../../constants/CategoryEnum';
import SwapiAction from '../../../stores/swapi/SwapiAction';
import ICategoryViewData from '../../../selectors/home/models/ICategoryViewData';

interface IState {}
interface IProps {}
interface IStateToProps {
    readonly categoryViewData: ICategoryViewData,
}
interface IDispatchToProps {
    readonly dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (state: IStore): IStateToProps => ({
    categoryViewData: getCategoryDisplayList(state),
});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
    dispatch,
});

class CategoryDisplay extends React.PureComponent<IStateToProps & IDispatchToProps & IProps, IState> {

    public render(): JSX.Element {
        const {categoryViewData} = this.props;

        return (
            <div>
                {categoryViewData && (
                    <>
                        <div>
                            {categoryViewData.displayCount}
                        </div>
                        <ul className={styles.container}>
                            {categoryViewData.items.map((item: ICategoryListItem) =>
                                <li
                                    key={item.label}
                                    className={styles.item}
                                >
                                    <button
                                        onClick={this._onClickItem}
                                        data-category={item.category}
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
                        <div>
                            {categoryViewData.loadMoreUrl && (
                                <button
                                    type="button"
                                    data-load-more-endpoint={categoryViewData.loadMoreUrl}
                                    data-category={categoryViewData.category}
                                    onClick={this._onClickLoadMore}
                                >
                                    Load More
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        );
    }

    private _onClickItem = (event: React.MouseEvent<HTMLButtonElement>) => {
        const category: CategoryEnum = event.currentTarget.getAttribute('data-category') as CategoryEnum;
        const itemId: string = event.currentTarget.getAttribute('data-item-id');

        this.props.dispatch(SwapiAction.loadDetails(itemId, category));
    }

    private _onClickLoadMore = (event: React.MouseEvent<HTMLButtonElement>) => {
        const category: CategoryEnum = event.currentTarget.getAttribute('data-category') as CategoryEnum;
        const apiEndpoint: string = event.currentTarget.getAttribute('data-load-more-endpoint');

        this.props.dispatch(SwapiAction.loadCategory({
            apiEndpoint,
            category,
        }));
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDisplay);
