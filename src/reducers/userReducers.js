import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (state = { userInfo: {} }, action) => {
  if (action.type === USER_LOGIN_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      userInfo: action.payload,
    };
  }
  if (action.type === USER_LOGIN_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};
