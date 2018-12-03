import Loadable from 'react-loadable';
import AsyncLoader from '../components/AsyncLoader';
// import OptionsWithoutRender = LoadableExport.OptionsWithoutRender;
// import {IProps} from './NotFound';

const loadableOptions/*: OptionsWithoutRender<IProps>*/ = {
    loader: () => import(/* webpackChunkName: "NotFound" */ './NotFound'),
    loading: AsyncLoader,
};

export default Loadable(loadableOptions);
