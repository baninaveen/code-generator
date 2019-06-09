import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/reducerUtils";
import { ACTION_TYPE } from "path___to__component__constants";

const initialState = fromJS({
  test: null,
});

const testReducerFunctions = {
  [ACTION_TYPE]: (state, payload) => {
    let newState = state;
    newState = state.set("test", fromJS(payload))
    return newState;
  }
};

const testReducer = createReducerFromObject(
  testReducerFunctions,
  initialState
);
export default testReducer;
