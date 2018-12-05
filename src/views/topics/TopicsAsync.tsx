import Loadable from 'react-loadable';
import AsyncLoader from '../components/AsyncLoader';
// import {IProps} from './Topics';

const loadableOptions/*: LoadableExport.OptionsWithoutRender<IProps>*/ = {
    loader: () => import(/* webpackChunkName: "Topics" */ './Topics'),
    loading: AsyncLoader,
};

export default Loadable(loadableOptions);
