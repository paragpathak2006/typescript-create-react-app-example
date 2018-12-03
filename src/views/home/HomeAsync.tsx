import Loadable from 'react-loadable';
import AsyncLoader from '../components/AsyncLoader';
// import OptionsWithoutRender = LoadableExport.OptionsWithoutRender;
// import {IProps} from './Home';

const loadableOptions/*: OptionsWithoutRender<IProps>*/ = {
    loader: () => import(/* webpackChunkName: "Home" */ './Home'),
    loading: AsyncLoader,
};

export default Loadable(loadableOptions);
