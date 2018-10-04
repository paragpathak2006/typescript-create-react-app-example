import TopicService from './TopicService';
import ITopic from './models/ITopic';
import ErrorAction from '../errors/ErrorAction';
import {call, put} from 'redux-saga/effects';
import TopicAction from './TopicAction';

export default class TopicSaga {

    public static* loadTopics() {
        try {
            const topicsResponse: ITopic[] = yield call(TopicService.loadTopics);

            yield put(TopicAction.loadTopicsSuccessful(topicsResponse));
        } catch (error) {
            yield put(ErrorAction.requestFailure(error, 'TopicSaga.loadTopics'));
        }
    }

}
