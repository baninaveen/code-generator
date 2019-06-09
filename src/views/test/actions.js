import { ACTION_TYPE } from "./constants"

export function actionFunctionName(payload) {
  return {
    type: ACTION_TYPE,
    payload
  }
}