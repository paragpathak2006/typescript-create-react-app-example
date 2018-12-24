import ErrorAction from '../errors/ErrorAction';
import {call, put, select} from 'redux-saga/effects';
import SwapiService from './SwapiService';
import CategoriesResponseModel from './models/CategoriesResponseModel';
import SwapiAction from './SwapiAction';
import IAction from '../IAction';
import IStore from '../IStore';
import SwapiEnum from '../../constants/SwapiEnum';

export default class SwapiSaga {

    public static* loadCategories() {
        try {
            const responseModel: CategoriesResponseModel = yield call(SwapiService.loadCategories);

            yield put(SwapiAction.loadCategoriesSuccess(responseModel));
        } catch (error) {
            yield put(ErrorAction.requestFailure(error, 'SwapiSaga.loadCategories'));
        }
    }

    public static* loadCategory(action: IAction<SwapiEnum>) {
        const store: IStore = yield select();
        const categoryId: SwapiEnum = action.payload;
        const endpoint: string = store.swapiReducer.categories[categoryId];

        try {
            const responseModel: any = yield call(SwapiService.load, endpoint);

            yield put(SwapiAction.loadCategorySuccess(responseModel, categoryId));
        } catch (error) {
            yield put(ErrorAction.requestFailure(error, 'SwapiSaga.loadCategory'));
        }
    }

}
