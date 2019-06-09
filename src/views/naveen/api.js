import request from "../../utils/request";

  export const apiFunctionName = () => {
    const options = {
      method: "METHOD_NAME",
      // isLoader: true,
      params: {}
    };
    return request('endpoint', options, false);
  };
  
  // If you have pass body with POST request then pass payload into params: {payload}
  /* 
  
  export const apiFunctionName = (payload) => {
    const options = {
      method: "METHOD_NAME",
      // isLoader: true,
      params: {payload}
    };
    return request('endpoint', options, false);
  };
  
  */
