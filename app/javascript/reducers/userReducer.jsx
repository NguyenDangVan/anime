import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/types";

const initialState = {
  isAuth: !!localStorage.getItem("token"),
  user: {},
  error: {}
};

const userReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: {},
      };
    case LOGIN_SUCCESS:
      return {
        isAuth: false,
        error: {},
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case LOGOUT:
      return {
        isAuth: false,
        error: {},
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
