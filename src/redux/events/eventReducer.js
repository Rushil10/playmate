/* eslint-disable default-case */
import { SET_EVENTS, SET_EVENTS_LOADING } from "../types";

const initialState = {
  events: [],
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case SET_EVENTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
