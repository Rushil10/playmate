import { LOGOUT_USER, SET_LOCATION, SET_USER } from "../types";

const initialState = {
  user: {},
  authenticated: false,
  location: {
    latitude: 19.126695,
    longitude: 72.972478,
    city: 'Thane'
  },
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
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        authenticated: false,
      }
    default:
      return state;
  }
}
