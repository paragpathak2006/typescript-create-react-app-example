import {all, fork, ForkEffect} from 'redux-saga/effects';
import TopicSaga from './topics/TopicSaga';

export default function* rootSaga() {
    const filteredSagas: ForkEffect[] = [
        fork(TopicSaga.loadTopics),
    ];

    yield all(filteredSagas);
}
