import axios from "axios";
import {
  FETCHING_DEALS,
  FETCH_DEALS_SUCCESS,
  FETCH_DEALS_ERROR,
  CREATING_DEAL,
  CREATE_DEAL_SUCCESS,
  CREATE_DEAL_ERROR,
  DELETING_DEAL,
  DELETE_DEAL_SUCCESS,
  DELETE_DEAL_ERROR,
} from "./types.js";
import { toast } from "react-toastify";
import { API_URL } from "../config/constants";

export function getDealById(id) {
  return function (dispatch) {
    dispatch({
      type: FETCHING_DEALS,
    });
    axios
      .get(`${API_URL}/getDealById.php?id=${id}`)
      .then((response) => {
        console.log(response.data.result);
        dispatch({
          type: FETCH_DEALS_SUCCESS,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response);
        dispatch({
          type: FETCH_DEALS_ERROR,
          payload: error,
        });
      });
  };
}

export function createDeal(deal) {
  return function (dispatch) {
    dispatch({
      type: CREATING_DEAL,
    });
    axios
      .post(`${API_URL}/createDeal.php`, deal)
      .then((response) => {
        // console.log(response.data.result);
        toast.success(response.data);
        dispatch({
          type: CREATE_DEAL_SUCCESS,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response);
        dispatch({
          type: CREATE_DEAL_ERROR,
          payload: error,
        });
      });
  };
}

export function deleteDeal(id) {
  return function (dispatch) {
    dispatch({
      type: DELETING_DEAL,
    });
    axios
      .post(`${API_URL}/deleteDeal.php`, { id })
      .then((response) => {
        // console.log(response.data.result);
        toast.success(response.data);
        dispatch({
          type: DELETE_DEAL_SUCCESS,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response);
        dispatch({
          type: DELETE_DEAL_ERROR,
          payload: error,
        });
      });
  };
}
