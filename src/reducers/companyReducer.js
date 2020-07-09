import { TESTE } from "../actions/types.js";

const companyInitialState = {
  var: {},
  var2: false,
};

const companyReducer = (state = companyInitialState, action) => {
  const newState = {};

  switch (action.type) {
    case TESTE: {
      Object.assign(newState, state, {
        var1: action.payload,
        var2: false,
      });

      return newState;
    }
    default:
      return state;
  }
};

export default companyReducer;
