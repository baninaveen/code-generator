import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/reducerUtils";
import { ACTION_TYPE } from "path___to__component__constants";

const initialState = fromJS({
  fdsf: null,
});

const fdsfReducerFunctions = {
  [ACTION_TYPE]: (state, payload) => {
    let newState = state;
    newState = state.set("fdsf", fromJS(payload))
    return newState;
  }
};

const fdsfReducer = createReducerFromObject(
  fdsfReducerFunctions,
  initialState
);
export default fdsfReducer;
