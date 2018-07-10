import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    isLoading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
      case EMAIL_CHANGED:
          return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
          return {...state, password: action.payload};
      case LOGIN_USER:
          return {...state, isLoading: true, error: ''};
      case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};
      case LOGIN_USER_FAILED:
          return {...state, error: 'Authentication Failed', password: '', isLoading: false};
      default:
          return state;
  }
};