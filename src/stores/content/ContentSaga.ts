import ContentService from './ContentService';
import ITopic from './models/ITopic';
import ErrorAction from '../errors/ErrorAction';
import {call, put} from 'redux-saga/effects';
import ContentAction from './ContentAction';

export default class ContentSaga {

    public static* loadContent() {
        try {
            const contentResponse: ITopic[] = yield call(ContentService.loadContent);

            yield put(ContentAction.loadTopicsSuccessful(contentResponse));
        } catch (error) {
            yield put(ErrorAction.requestFailure(error, 'ContentSaga.loadContent'));
        }
    }

}
