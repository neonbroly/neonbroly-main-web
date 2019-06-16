import authReducer from "./authReducer";
import remarkReducer from "./remarkReducer";
import assetReducer from "./assetReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  asset: assetReducer,
  remark: remarkReducer
});

export default rootReducer;
