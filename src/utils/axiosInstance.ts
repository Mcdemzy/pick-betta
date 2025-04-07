import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-app-ctwey.ondigitalocean.app/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
