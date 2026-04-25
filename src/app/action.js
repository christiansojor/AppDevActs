export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGOUT = 'LOGOUT';

export const loginRequest = (payload) => ({ type: LOGIN_REQUEST, payload });
export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, error });

export const registerRequest = (payload) => ({ type: REGISTER_REQUEST, payload });
export const registerSuccess = (payload) => ({ type: REGISTER_SUCCESS, payload });
export const registerFailure = (error) => ({ type: REGISTER_FAILURE, error });

export const logout = () => ({ type: LOGOUT });