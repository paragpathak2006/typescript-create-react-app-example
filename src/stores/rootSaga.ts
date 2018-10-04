import {all, fork, ForkEffect} from 'redux-saga/effects';
import ContentSaga from './content/ContentSaga';

export default function* rootSaga() {
    const filteredSagas: ForkEffect[] = [
        fork(ContentSaga.loadContent),
    ];

    yield all(filteredSagas);
}
