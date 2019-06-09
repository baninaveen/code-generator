import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/reducerUtils";
import { ACTION_TYPE } from "path___to__component__constants";

const initialState = fromJS({
  group: null,
});

const groupReducerFunctions = {
  [ACTION_TYPE]: (state, payload) => {
    let newState = state;
    newState = state.set("group", fromJS(payload))
    return newState;
  }
};

const groupReducer = createReducerFromObject(
  groupReducerFunctions,
  initialState
);
export default groupReducer;
