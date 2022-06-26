import axios from 'axios';
import queryString from 'query-string';
// import { BASE_URL } from "@/utils/constant"
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs`

const axiosClient = axios.create({
   baseURL: 'http://localhost:5000',
   headers: {
      'content-type': 'application/json',
   },
   paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
   // Handle token here ...
   return config;
})
axiosClient.interceptors.response.use((response) => {
   if (response && response.data) {
   return response.data;
   }
   return response;
}, (error) => {
// Handle errors
   throw error;
});
export default axiosClient;