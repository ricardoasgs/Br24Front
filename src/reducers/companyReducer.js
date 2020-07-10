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
  FETCHING_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  CREATING_CONTACT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_ERROR,
} from "../actions/types.js";

const companyInitialState = {
  companies: [],
  company: {},
  contacts: [],
  contact: {},
  loading: false,
  error: "",
};

const companyReducer = (state = companyInitialState, action) => {
  const newState = {};

  switch (action.type) {
    case FETCHING_COMPANIES: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case FETCH_COMPANIES_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
        companies: action.payload,
      });

      return newState;
    }
    case FETCH_COMPANIES_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    case FETCHING_COMPANY: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case FETCH_COMPANY_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
        company: action.payload,
      });

      return newState;
    }
    case FETCH_COMPANY_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    case CREATING_COMPANY: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case CREATE_COMPANY_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
        companies: [...state.companies, action.payload],
      });

      return newState;
    }
    case CREATE_COMPANY_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    case UPDATING_COMPANY: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case UPDATE_COMPANY_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
      });

      return newState;
    }
    case UPDATE_COMPANY_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    case DELETING_COMPANY: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case DELETE_COMPANY_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
      });

      return newState;
    }
    case DELETE_COMPANY_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    case FETCHING_CONTACTS: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case FETCH_CONTACTS_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
        contacts: action.payload,
      });

      return newState;
    }
    case FETCH_CONTACTS_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    case CREATING_CONTACT: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case CREATE_CONTACT_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
        contacts: [...state.contacts, action.payload],
      });

      return newState;
    }
    case CREATE_CONTACT_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    default:
      return state;
  }
};

export default companyReducer;
