import { all } from 'redux-saga/effects';

import inviteSagas from './invite';

export default function* rootSaga() {
    yield all([inviteSagas]);
}
