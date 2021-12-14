import axios from "axios"
import jwtDecode from "jwt-decode"
import url from '../../config/api'
import { LOGOUT_USER, SET_LOCATION, SET_USER } from "../types";

export const setPlayerData = (token) => dispatch => {
    var decoded = jwtDecode(token);
    dispatch({ type: SET_USER, payload: decoded })
}

export const setLocation = (location) => dispatch => {
    dispatch({ type: SET_LOCATION, payload: location })
}

export const logoutUser = () => dispatch => {
    dispatch({ type: LOGOUT_USER })
}