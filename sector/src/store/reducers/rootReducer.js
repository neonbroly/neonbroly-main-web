import authReducer from "./authReducer";
import remarkReducer from "./remarkReducer";
import assetReducer from "./assetReducer";
import { firestoreReducer } from "redux-firestore";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  asset: assetReducer,
  remark: remarkReducer,
  firestore: firestoreReducer
});

export default rootReducer;
