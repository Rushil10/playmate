import axios from "axios";
import api from "../../config/api";
import {
  SET_EVENTS,
  SET_EVENTS_LOADING,
  SET_JOINED_EVENTS,
  SET_JOINED_LOADING,
  SET_ORGANIZED_EVENTS,
  SET_ORGANIZED_LOADING,
} from "../types";

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

export const getOrganizedEvents = () => (dispatch) => {
  dispatch({ type: SET_ORGANIZED_LOADING, payload: true });
  var playerToken = localStorage.getItem("playerToken");
  var config = {
    headers: { Authorization: `Bearer ${playerToken}` },
    "Content-Type": "application/json",
  };
  axios
    .get(`${api}/event/player`, config)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SET_ORGANIZED_EVENTS, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const getJoinedEvents = () => (dispatch) => {
  dispatch({ type: SET_JOINED_LOADING, payload: true });
  var playerToken = localStorage.getItem("playerToken");
  var config = {
    headers: { Authorization: `Bearer ${playerToken}` },
    "Content-Type": "application/json",
  };
  axios
    .get(`${api}/event/player/joined`, config)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SET_JOINED_EVENTS, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};
