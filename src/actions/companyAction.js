import axios from "axios";
import { TESTE } from "./types.js";
import { toast } from "react-toastify";
import { API_URL } from "../config/constants";

export function getCompanyInfo(cpf, callback) {
  return function (dispatch) {
    dispatch({
      type: TESTE,
    });
    axios
      .post(`${API_URL}`, { cpf })
      .then((response) => {
        console.log(response);
        callback();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.statusText);
      });
  };
}
