import { put, call, all, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { SEND_INVITE, SEND_INVITE_SUCCESS, SEND_INVITE_FAILED } from 'ducks/invite';

import { SERVICE_ENDPOINT } from 'constants/config';

export function* sendInvite({ payload }) {
    try {
        const { status } = yield call(axios.post, SERVICE_ENDPOINT, { ...payload });

        yield put({ type: SEND_INVITE_SUCCESS, payload: status });
    } catch ({
        response: {
            status,
            data: { errorMessage },
        },
    }) {
        yield put({ type: SEND_INVITE_FAILED, payload: { status, errorMessage } });
    }
}

export default all([takeEvery(SEND_INVITE, sendInvite)]);
