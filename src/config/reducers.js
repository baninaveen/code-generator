import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/reducerUtils";
import { ACTION_TYPE } from "path___to__component__constants";

const initialState = fromJS({
  categories: null,
});

const categoryReducerFunctions = {
  [ACTION_TYPE]: (state, payload) => {
    let newState = state;
    newState = state.set("categories", fromJS(payload))
    return newState;
  }
};

const categoryReducer = createReducerFromObject(
  categoryReducerFunctions,
  initialState
);
export default categoryReducer;
