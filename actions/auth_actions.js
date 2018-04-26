import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from './types';
import {Facebook} from 'expo';

import {AsyncStorage} from 'react-native';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
        // already authenticated
        dispatch({
            type: FACEBOOK_LOGIN_SUCCESS,
            payload: token
        });
    } else {
        // hasn't been authenticated yet...
        await doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {
    let {token, type} = await Facebook.logInWithReadPermissionsAsync('874565592730936', {
        permission: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({
            type: FACEBOOK_LOGIN_FAIL
        })
    }

    await AsyncStorage.setItem('fb_token', token);

    dispatch({
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: token
    })
};