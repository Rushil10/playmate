import axios from "axios";
import api from "../../config/api";
import { SET_EVENTS, SET_EVENTS_LOADING } from "../types";

export const getEventsNearMe = (filters) => (dispatch) => {
  dispatch({ type: SET_EVENTS_LOADING, payload: true });
  axios
    .post(`${api}/event/nearMe`, filters)
    .then((res) => {
      dispatch({ type: SET_EVENTS, payload: res.data.data });
    })
    .catch((err) => {
        console.log(err);
    });
};
