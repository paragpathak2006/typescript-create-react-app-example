import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import IAction from '../../../stores/IAction';
import IStore from '../../../stores/IStore';
import ICategoryListItem from '../../../selectors/home/models/ICategoryListItem';
import {getCategoryDisplayList} from '../../../selectors/home/HomeSelector';

interface IState {}
interface IProps {}
interface IStateToProps {
    categoryItems: ICategoryListItem[]
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
            <ul>
                {this.props.categoryItems.map((item: ICategoryListItem) =>
                    <li key={item.label}>
                        {item.label}
                        <img src={item.imageUrl}/>
                    </li>
                )}
            </ul>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDisplay);
