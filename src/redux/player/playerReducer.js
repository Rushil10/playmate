import { SET_USER } from "../types";

const initialState = {
  user: {},
  authenticated: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    default:
      return state;
  }
}
