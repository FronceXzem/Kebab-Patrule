import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let accessToken = '';




function SetAccessToken(token) {
 
  accessToken = token;
  
   
}
 
/// В каждый запрос добавляет заголовок Authorization
axiosInstance.interceptors.request.use((config) => {
  
  if (!config.headers.Authorization) {
    
    
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});





axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config; // сохраняем предыдущий запрос
    if (error.response.status === 403 && !prevRequest.sent) {
      const response = await axios.get('/api/tokens/refresh');
      accessToken = response.data.accessToken;
      prevRequest.sent = true;
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(prevRequest);
    }
    return Promise.reject(error);
  },
);


export default axiosInstance

export {SetAccessToken}
