import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: `https://fundtracking.herokuapp.com/`,
});

export default axiosInstance;