import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from '../actions/types';

const INITIAL_STATE = {};

export default authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return { token: action.payload };

            break;
        case FACEBOOK_LOGIN_FAIL:
            return { token: null };

            break;
        default:
            return state
    }
};