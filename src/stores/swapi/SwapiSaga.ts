import ErrorAction from '../errors/ErrorAction';
import {call, put} from 'redux-saga/effects';
import SwapiService from './SwapiService';
import ICategoriesResponse from './models/ICategoriesResponse';
import SwapiAction from './SwapiAction';
import IAction from '../IAction';
import SwapiEnum from '../../constants/SwapiEnum';
import ILoadDetails from './models/ILoadDetails';
import CategoryResponseModel, {SwapiModelUnion} from './models/CategoryResponseModel';

export default class SwapiSaga {

    public static* loadCategories() {
        try {
            const responseModel: ICategoriesResponse = yield call(SwapiService.loadCategories);

            yield put(SwapiAction.loadCategoriesSuccess(responseModel));
        } catch (error) {
            yield put(ErrorAction.requestFailure(error, 'SwapiSaga.loadCategories'));
        }
    }

    public static* loadCategory(action: IAction<SwapiEnum>) {
        const category: SwapiEnum = action.payload;

        try {
            const responseModel: CategoryResponseModel<SwapiModelUnion> = yield call(SwapiService.loadCategory, action.meta, category);

            yield put(SwapiAction.loadCategorySuccess(responseModel, category));
        } catch (error) {
            yield put(ErrorAction.requestFailure(error, 'SwapiSaga.loadCategory'));
        }
    }

    public static* loadDetails(action: IAction<ILoadDetails>) {
        try {
            const responseModel: SwapiModelUnion = yield call(SwapiService.loadDetails, action.payload);

            yield put(SwapiAction.loadDetailsSuccess(responseModel));
        } catch (error) {
            yield put(ErrorAction.requestFailure(error, 'SwapiSaga.loadDetails'));
        }
    }

}
