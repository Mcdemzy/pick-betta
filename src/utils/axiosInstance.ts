import axios from "axios";

const API = axios.create({
  baseURL: "https://pickbetta-user-service-mmkpr.ondigitalocean.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
