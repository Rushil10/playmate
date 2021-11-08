/* eslint-disable default-case */
import {
  SET_EVENTS,
  SET_EVENTS_LOADING,
  SET_ORGANIZED_EVENTS,
  SET_ORGANIZED_LOADING,
} from "../types";

const initialState = {
  events: [],
  loading: true,
  organizedEvents: [],
  organizedLoading: true,
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
    case SET_ORGANIZED_LOADING:
      return {
        ...state,
        organizedLoading: action.payload,
      };
    case SET_ORGANIZED_EVENTS:
      return {
        ...state,
        organizedEvents: action.payload,
        organizedLoading: false,
      };
    default:
      return state;
  }
}
