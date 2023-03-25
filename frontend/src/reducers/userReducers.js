import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }; //state mai auto userInfo ka object bn jaye ga
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }; //action . payload mai data action sy a raha hai
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};