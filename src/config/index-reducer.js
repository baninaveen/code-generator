import { combineReducers } from "redux";
import messageReducer from "./reducers/message";
import loaderReducer from "./reducers/loader";
import categoryReducer from "./reducers/category";

const IndexReducer = combineReducers({
  loaderReducer,
  messageReducer,
  categoryReducer
})

export default IndexReducer;