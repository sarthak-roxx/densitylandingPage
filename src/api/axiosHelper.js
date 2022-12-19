import axios from "axios";




const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://api-dev.density.exchange"
  });
  
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status >= 500) {
        console.log(error)
      }
    });
  
  axiosInstance.defaults.headers.common.accept = "*/*";
  axiosInstance.defaults.headers.common.rid = "anti-csrf";

  const axiosWithApiServer = ({ url, method, body = null, headers = null, isMultiPartData = false }) => {
    const requestBody = isMultiPartData === true ? body : JSON.parse(body);
    return axiosInstance[method](url, requestBody, headers);
  };

  export default axiosWithApiServer;
