const { writeFileSync, mkdirSync, readFileSync, existsSync, openSync, appendFileSync, closeSync } = require('fs');

const test = `const IndexReducer = combineReducers({
    loaderReducer,
    messageReducer,
    categoryReducer
  })
  
  export default IndexReducer;`

const fun = `import { combineReducers } from "redux";
import messageReducer from "./reducers/message";
import loaderReducer from "./reducers/loader";
import categoryReducer from "./reducers/category";
import testReducer from "./reducers/test";`



let po = test.indexOf('}')
let result = test.slice(0, po)

console.log(result + 'added')
