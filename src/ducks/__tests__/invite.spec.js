import invite, * as inviteTypes from '../invite';

describe('ducks/invite', () => {
    const initState = {
        isLoading: false,
        status: 0,
        error: '',
    };

    test('>>> REDUCER >>> should return default state if type doesnt exit', () => {
        const state = invite(initState, { type: 'invite/RANDOM_ACTION' });
        expect(state).toEqual(initState);
    });
    test('>>> REDUCER >>> should simulate sendInvite action', () => {
        const state = invite(initState, {
            type: inviteTypes.SEND_INVITE,
            payload: { email: 'john.doe@test.com', name: 'John Doe' },
        });
        expect(state).toEqual({ isLoading: true, status: 0, error: '' });
    });
    test('>>> REDUCER >>> should set SUCCESS response from sendInvite', () => {
        const state = invite(initState, {
            type: inviteTypes.SEND_INVITE_SUCCESS,
            payload: 200,
        });
        expect(state).toEqual({ isLoading: false, status: 200, error: '' });
    });
    test('>>> REDUCER >>> should set FAILED response from sendInvite', () => {
        const state = invite(initState, {
            type: inviteTypes.SEND_INVITE_FAILED,
            payload: { status: 400, errorMessage: 'sample error' },
        });
        expect(state).toEqual({ isLoading: false, status: 400, error: 'sample error' });
    });
    test('>>> ACTION >>> should call sendInvite', () => {
        const payload = { email: 'john.doe@test.com', name: 'John Doe' };
        expect(inviteTypes.sendInvite(payload)).toEqual({
            type: inviteTypes.SEND_INVITE,
            payload,
        });
    });
});
