import {all, fork, ForkEffect, takeLatest} from 'redux-saga/effects';
import ContentSaga from './content/ContentSaga';
import SwapiSaga from './swapi/SwapiSaga';
import SwapiAction from './swapi/SwapiAction';

export default function* rootSaga() {
    const sagas: ForkEffect[] = [
        fork(ContentSaga.loadContent),
        takeLatest(SwapiAction.LOAD_CATEGORIES, SwapiSaga.loadCategories),
    ];

    yield all(sagas);
}
