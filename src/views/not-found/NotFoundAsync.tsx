import * as Loadable from 'react-loadable';
import OptionsWithoutRender = LoadableExport.OptionsWithoutRender;
import AsyncLoader from '../components/AsyncLoader';
import {IProps} from './NotFound';

const loadableOptions: OptionsWithoutRender<IProps> = {
    loader: () => import(/* webpackChunkName: "NotFound" */ './NotFound'),
    loading: AsyncLoader,
};

export default Loadable(loadableOptions);
