import axios from "axios"
import jwtDecode from "jwt-decode"
import url from '../../config/api'
import { SET_USER } from "../types";

export const setPlayerData = (token) => dispatch => {
    var decoded = jwtDecode(token);
    dispatch({type:SET_USER,payload:decoded})
}