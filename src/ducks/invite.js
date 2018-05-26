export const SEND_INVITE = 'invite/SEND_INVITE';
export const SEND_INVITE_SUCCESS = 'invite/SEND_INVITE_SUCCESS';
export const SEND_INVITE_FAILED = 'invite/SEND_INVITE_FAILED';

export const CLEAR_STATE = 'invite/CLEAR_STATE';

export const sendInvite = payload => ({ type: SEND_INVITE, payload });
export const clearState = () => ({ type: CLEAR_STATE });

const initState = {
    isLoading: false,
    status: 0,
    error: '',
};

export default function invite(state = { ...initState }, { type, payload }) {
    switch (type) {
    case SEND_INVITE:
        return {
            ...state,
            status: 0,
            isLoading: true,
            error: '',
        };
    case SEND_INVITE_SUCCESS:
        return { ...state, isLoading: false, status: payload };
    case SEND_INVITE_FAILED:
        return {
            ...state,
            isLoading: false,
            error: payload.errorMessage,
            status: payload.status,
        };
    case CLEAR_STATE:
        return initState;
    default:
        return state;
    }
}
