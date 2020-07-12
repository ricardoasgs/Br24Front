import axios from "axios";
import {
  FETCHING_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  CREATING_CONTACT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_ERROR,
  UPDATE_CONTACT_SUCCESS,
  UPDATING_CONTACT,
  UPDATE_CONTACT_ERROR,
  DELETING_CONTACT,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
} from "./types.js";
import { toast } from "react-toastify";
import { API_URL } from "../config/constants";

export function getContactById(id) {
  return function (dispatch) {
    dispatch({
      type: FETCHING_CONTACTS,
    });
    axios
      .get(`${API_URL}/getContactById.php?id=${id}`)
      .then((response) => {
        // console.log(response.data.result);
        dispatch({
          type: FETCH_CONTACTS_SUCCESS,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_CONTACTS_ERROR,
          payload: error,
        });
        toast.error(error.response);
      });
  };
}

export function createContact(contact) {
  return function (dispatch) {
    dispatch({
      type: CREATING_CONTACT,
    });
    axios
      .post(`${API_URL}/createContact.php`, contact)
      .then((response) => {
        console.log(response.data.result);
        toast.success(response.data);
        dispatch({
          type: CREATE_CONTACT_SUCCESS,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: CREATE_CONTACT_ERROR,
          payload: error,
        });
        toast.error(error.response);
      });
  };
}

export function updateContact(contact) {
  return function (dispatch) {
    dispatch({
      type: UPDATING_CONTACT,
    });
    axios
      .post(`${API_URL}/updateContact.php`, contact)
      .then((response) => {
        // console.log(response.data.result);
        toast.success(response.data);
        dispatch({
          type: UPDATE_CONTACT_SUCCESS,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: UPDATE_CONTACT_ERROR,
          payload: error,
        });
        toast.error(error.response);
      });
  };
}

export function deleteContact(id) {
  return function (dispatch) {
    dispatch({
      type: DELETING_CONTACT,
    });
    axios
      .post(`${API_URL}/deleteContact.php`, { id })
      .then((response) => {
        // console.log(response.data.result);
        toast.success(response.data);
        dispatch({
          type: DELETE_CONTACT_SUCCESS,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: DELETE_CONTACT_ERROR,
          payload: error,
        });
        toast.error(error.response);
      });
  };
}
