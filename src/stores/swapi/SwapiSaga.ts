import ErrorAction from '../errors/ErrorAction';
import {call, put} from 'redux-saga/effects';
import SwapiService from './SwapiService';
import CategoriesResponseModel from './models/CategoriesResponseModel';
import SwapiAction from './SwapiAction';

export default class SwapiSaga {

    public static* loadCategories() {
        try {
            const responseModel: CategoriesResponseModel = yield call(SwapiService.loadCategories);

            yield put(SwapiAction.loadCategoriesSuccess(responseModel));
        } catch (error) {
            yield put(ErrorAction.requestFailure(error, 'ContentSaga.loadContent'));
        }
    }

}
