import * as Loadable from 'react-loadable';
import OptionsWithoutRender = LoadableExport.OptionsWithoutRender;
import AsyncLoader from '../components/AsyncLoader';
import {IProps} from './Topics';

const loadableOptions: OptionsWithoutRender<IProps> = {
    loader: () => import(/* webpackChunkName: "Topics" */ './Topics'),
    loading: AsyncLoader,
};

export default Loadable(loadableOptions);
