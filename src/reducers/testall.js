import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/reducerUtils";
import { ACTION_TYPE } from "path___to__component__constants";

const initialState = fromJS({
  testall: null,
});

const testallReducerFunctions = {
  [ACTION_TYPE]: (state, payload) => {
    let newState = state;
    newState = state.set("testall", fromJS(payload))
    return newState;
  }
};

const testallReducer = createReducerFromObject(
  testallReducerFunctions,
  initialState
);
export default testallReducer;
