import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import axios from 'axios';

import * as inviteTypes from 'ducks/invite';
import { SERVICE_ENDPOINT } from 'constants/config';

import * as inviteSagas from '../invite';

describe('sagas/invite', () => {
    const request = { email: 'test@test.com', name: 'John Doe' };
    const inviteAction = inviteTypes.sendInvite(request);
    const axiosPost = call(axios.post, SERVICE_ENDPOINT, request);
    let generator;
    let result;

    beforeEach(() => {
        generator = cloneableGenerator(inviteSagas.sendInvite)(inviteAction);
        result = generator.next();
    });

    test('should send invite with 200 status', () => {
        const response = {
            status: 200,
        };

        expect(result.value).toEqual(axiosPost);

        result = generator.next(response);

        const successData = { type: inviteTypes.SEND_INVITE_SUCCESS, payload: 200 };

        expect(result.value).toEqual(put(successData));
    });
    test('should send invite with 400 status', () => {
        const response = {
            status: 400,
            data: {
                errorMessage: 'This is a sample error message',
            },
        };
        expect(result.value).toEqual(axiosPost);

        result = generator.throw({ response });

        const failedData = {
            type: inviteTypes.SEND_INVITE_FAILED,
            payload: { status: 400, errorMessage: response.data.errorMessage },
        };

        expect(result.value).toEqual(put(failedData));
    });
});
