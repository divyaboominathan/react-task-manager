import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

apiClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.code === "ERR_NETWORK") {
      window?.location?.reload();
    } else {
      return Promise.reject(error);
    }
  }
);
