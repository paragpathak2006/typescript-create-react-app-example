import Loadable from 'react-loadable';
import AsyncLoader from '../components/AsyncLoader';
// import OptionsWithoutRender = LoadableExport.OptionsWithoutRender;
// import {IProps} from './Topics';

const loadableOptions/*: OptionsWithoutRender<IProps>*/ = {
    loader: () => import(/* webpackChunkName: "Topics" */ './Topics'),
    loading: AsyncLoader,
};

export default Loadable(loadableOptions);
