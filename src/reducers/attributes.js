import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/reducerUtils";
import { ACTION_TYPE } from "path___to__component__constants";

const initialState = fromJS({
  attributes: null,
});

const attributesReducerFunctions = {
  [ACTION_TYPE]: (state, payload) => {
    let newState = state;
    newState = state.set("attributes", fromJS(payload))
    return newState;
  }
};

const attributesReducer = createReducerFromObject(
  attributesReducerFunctions,
  initialState
);
export default attributesReducer;
