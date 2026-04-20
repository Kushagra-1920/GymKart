import axios from "axios";
const instance = axios.create({
  baseURL: "https://gymkart-backend-20.onrender.com",
  withCredentials: true,
});
export default instance;
