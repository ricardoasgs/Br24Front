import {
  FETCHING_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  CREATING_CONTACT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_ERROR,
  UPDATING_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,
  DELETING_CONTACT,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
} from "../actions/types.js";

const contactInitialState = {
  contacts: [],
  contact: {},
  loading: false,
  error: "",
};

const contactReducer = (state = contactInitialState, action) => {
  const newState = {};

  switch (action.type) {
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
    case UPDATING_CONTACT: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case UPDATE_CONTACT_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
      });

      return newState;
    }
    case UPDATE_CONTACT_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    case DELETING_CONTACT: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case DELETE_CONTACT_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
      });

      return newState;
    }
    case DELETE_CONTACT_ERROR: {
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

export default contactReducer;
