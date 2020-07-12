import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import contactReducer from "./contactReducer";
import dealReducer from "./dealReducer";

export default combineReducers({
  companyReducer,
  contactReducer,
  dealReducer,
});
