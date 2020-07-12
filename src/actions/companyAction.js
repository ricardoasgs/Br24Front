import axios from "axios";
import {
  FETCHING_COMPANY,
  FETCH_COMPANY_SUCCESS,
  FETCH_COMPANY_ERROR,
  FETCHING_COMPANIES,
  FETCH_COMPANIES_ERROR,
  FETCH_COMPANIES_SUCCESS,
  CREATING_COMPANY,
  CREATE_COMPANY_SUCCESS,
  CREATE_COMPANY_ERROR,
  DELETING_COMPANY,
  DELETE_COMPANY_ERROR,
  DELETE_COMPANY_SUCCESS,
  UPDATING_COMPANY,
  UPDATE_COMPANY_ERROR,
  UPDATE_COMPANY_SUCCESS,
} from "./types.js";
import { toast } from "react-toastify";
import { API_URL } from "../config/constants";

export function getCompany() {
  return function (dispatch) {
    dispatch({
      type: FETCHING_COMPANIES,
    });
    axios
      .get(`${API_URL}/getCompany.php`)
      .then((response) => {
        // console.log(response.data.result);
        dispatch({
          type: FETCH_COMPANIES_SUCCESS,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_COMPANIES_ERROR,
          payload: error,
        });
        toast.error(error.response);
      });
  };
}

export function getCompanyById(id) {
  return function (dispatch) {
    dispatch({
      type: FETCHING_COMPANY,
    });
    axios
      .get(`${API_URL}/getCompanyById.php?id=${id}`)
      .then((response) => {
        // console.log(response.data.result);
        dispatch({
          type: FETCH_COMPANY_SUCCESS,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_COMPANY_ERROR,
          payload: error,
        });
        toast.error(error.response);
      });
  };
}

export function createCompany(company, callback) {
  return function (dispatch) {
    dispatch({
      type: CREATING_COMPANY,
    });
    axios
      .post(`${API_URL}/createCompany.php`, company)
      .then((response) => {
        toast.success(response.data);
        // console.log(response);
        dispatch({
          type: CREATE_COMPANY_SUCCESS,
          payload: response.data.result,
        });
        callback();
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: CREATE_COMPANY_ERROR,
          payload: error,
        });
        toast.error(error.response);
      });
  };
}

export function deleteCompany(id) {
  return function (dispatch) {
    dispatch({
      type: DELETING_COMPANY,
    });
    axios
      .delete(`${API_URL}/deleteCompany.php`, { data: { id } })
      .then((response) => {
        // console.log(response);
        toast.success(response.data);
        dispatch({
          type: DELETE_COMPANY_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: DELETE_COMPANY_ERROR,
          payload: error,
        });
        toast.error(error.response);
      });
  };
}

export function updateCompany(company) {
  return function (dispatch) {
    dispatch({
      type: UPDATING_COMPANY,
    });
    axios
      .put(`${API_URL}/updateCompany`, company)
      .then((response) => {
        // console.log(response.data.result);
        toast.success(response.data);
        dispatch({
          type: UPDATE_COMPANY_SUCCESS,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: UPDATE_COMPANY_ERROR,
          payload: error,
        });
        toast.error(error.response);
      });
  };
}

// export function getContactById(id) {
//   return function (dispatch) {
//     dispatch({
//       type: FETCHING_CONTACTS,
//     });
//     axios
//       .get(`${API_URL}/getContactById.php?id=${id}`)
//       .then((response) => {
//         // console.log(response.data.result);
//         dispatch({
//           type: FETCH_CONTACTS_SUCCESS,
//           payload: response.data.result,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch({
//           type: FETCH_CONTACTS_ERROR,
//           payload: error,
//         });
//         toast.error(error.response);
//       });
//   };
// }

// export function createContact(contact) {
//   return function (dispatch) {
//     dispatch({
//       type: CREATING_CONTACT,
//     });
//     axios
//       .post(`${API_URL}/createContact.php`, contact)
//       .then((response) => {
//         // console.log(response.data.result);
//         toast.success(response.data);
//         dispatch({
//           type: CREATE_CONTACT_SUCCESS,
//           payload: response.data.result,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch({
//           type: CREATE_CONTACT_ERROR,
//           payload: error,
//         });
//         toast.error(error.response);
//       });
//   };
// }

// export function updateContact(contact) {
//   return function (dispatch) {
//     dispatch({
//       type: UPDATING_CONTACT,
//     });
//     axios
//       .post(`${API_URL}/updateContact.php`, contact)
//       .then((response) => {
//         // console.log(response.data.result);
//         toast.success(response.data);
//         dispatch({
//           type: UPDATE_CONTACT_SUCCESS,
//           payload: response.data.result,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch({
//           type: UPDATE_CONTACT_ERROR,
//           payload: error,
//         });
//         toast.error(error.response);
//       });
//   };
// }

// export function deleteContact(id) {
//   return function (dispatch) {
//     dispatch({
//       type: DELETING_CONTACT,
//     });
//     axios
//       .post(`${API_URL}/deleteContact.php`, { id })
//       .then((response) => {
//         // console.log(response.data.result);
//         toast.success(response.data);
//         dispatch({
//           type: DELETE_CONTACT_SUCCESS,
//           payload: response.data.result,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch({
//           type: DELETE_CONTACT_ERROR,
//           payload: error,
//         });
//         toast.error(error.response);
//       });
//   };
// }

// export function getDealById(id) {
//   return function (dispatch) {
//     dispatch({
//       type: FETCHING_DEALS,
//     });
//     axios
//       .get(`${API_URL}/getDealById.php?id=${id}`)
//       .then((response) => {
//         // console.log(response.data.result);
//         dispatch({
//           type: FETCH_DEALS_SUCCESS,
//           payload: response.data.result,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch({
//           type: FETCH_DEALS_ERROR,
//           payload: error,
//         });
//         toast.error(error.response);
//       });
//   };
// }

// export function createDeal(deal) {
//   return function (dispatch) {
//     dispatch({
//       type: CREATING_DEAL,
//     });
//     axios
//       .post(`${API_URL}/createDeal.php`, deal)
//       .then((response) => {
//         // console.log(response.data.result);
//         toast.success(response.data);
//         dispatch({
//           type: CREATE_DEAL_SUCCESS,
//           payload: response.data.result,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch({
//           type: CREATE_DEAL_ERROR,
//           payload: error,
//         });
//         toast.error(error.response);
//       });
//   };
// }

// export function deleteDeal(id) {
//   return function (dispatch) {
//     dispatch({
//       type: DELETING_DEAL,
//     });
//     axios
//       .post(`${API_URL}/deleteDeal.php`, { id })
//       .then((response) => {
//         // console.log(response.data.result);
//         toast.success(response.data);
//         dispatch({
//           type: DELETE_DEAL_SUCCESS,
//           payload: response.data.result,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch({
//           type: DELETE_DEAL_ERROR,
//           payload: error,
//         });
//         toast.error(error.response);
//       });
//   };
// }
