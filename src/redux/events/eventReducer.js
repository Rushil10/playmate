/* eslint-disable default-case */
import {
  SET_BACKEDOUT_EVENTS,
  SET_BACKEDOUT_LOADING,
  SET_EVENTS,
  SET_EVENTS_LOADING,
  SET_JOINED_EVENTS,
  SET_JOINED_LOADING,
  SET_ORGANIZED_EVENTS,
  SET_ORGANIZED_LOADING,
  SET_REJECTED_EVENTS,
  SET_REJECTED_LOADING,
} from "../types";

const initialState = {
  events: [],
  loading: true,
  organizedEvents: [],
  organizedLoading: true,
  joinedEvents: [],
  joinedLoading: true,
  backedOutEvents: [],
  backedOutLoading: true,
  rejectedEvents: [],
  rejectedLoading: true,
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
    case SET_JOINED_LOADING:
      return {
        ...state,
        joinedLoading: action.payload,
      };
    case SET_JOINED_EVENTS:
      return {
        ...state,
        joinedEvents: action.payload,
        joinedLoading: false,
      };
    case SET_BACKEDOUT_LOADING:
      return {
        ...state,
        backedOutLoading: action.payload,
      };
    case SET_BACKEDOUT_EVENTS:
      return {
        ...state,
        backedOutEvents: action.payload,
        backedOutLoading: false,
      };
    case SET_REJECTED_LOADING:
      return {
        ...state,
        rejectedLoading: action.payload,
      };
    case SET_REJECTED_EVENTS:
      return {
        ...state,
        rejectedEvents: action.payload,
        rejectedLoading: false,
      };
    default:
      return state;
  }
}
