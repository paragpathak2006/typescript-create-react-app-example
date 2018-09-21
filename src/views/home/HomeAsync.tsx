import * as Loadable from 'react-loadable';
import OptionsWithoutRender = LoadableExport.OptionsWithoutRender;
import AsyncLoader from '../components/AsyncLoader';
import {IProps} from './Home';

const loadableOptions: OptionsWithoutRender<IProps> = {
    loader: () => import(/* webpackChunkName: "Home" */ './Home'),
    loading: AsyncLoader,
};

export default Loadable(loadableOptions);
