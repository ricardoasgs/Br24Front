import {
  FETCHING_DEALS,
  FETCH_DEALS_SUCCESS,
  FETCH_DEALS_ERROR,
  CREATING_DEAL,
  CREATE_DEAL_SUCCESS,
  CREATE_DEAL_ERROR,
  UPDATING_DEAL,
  UPDATE_DEAL_SUCCESS,
  UPDATE_DEAL_ERROR,
  DELETING_DEAL,
  DELETE_DEAL_SUCCESS,
  DELETE_DEAL_ERROR,
} from "../actions/types.js";

const contactInitialState = {
  deals: [],
  deal: {},
  loading: false,
  error: "",
  delet: 0,
};

const contactReducer = (state = contactInitialState, action) => {
  const newState = {};

  switch (action.type) {
    case FETCHING_DEALS: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case FETCH_DEALS_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
        deals: action.payload,
      });

      return newState;
    }
    case FETCH_DEALS_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    case CREATING_DEAL: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case CREATE_DEAL_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
      });

      return newState;
    }
    case CREATE_DEAL_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    case UPDATING_DEAL: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case UPDATE_DEAL_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
      });

      return newState;
    }
    case UPDATE_DEAL_ERROR: {
      Object.assign(newState, state, {
        loading: false,
        error: action.payload,
      });

      return newState;
    }
    case DELETING_DEAL: {
      Object.assign(newState, state, {
        loading: true,
      });

      return newState;
    }
    case DELETE_DEAL_SUCCESS: {
      Object.assign(newState, state, {
        loading: false,
        delet: Math.random(),
      });

      return newState;
    }
    case DELETE_DEAL_ERROR: {
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
