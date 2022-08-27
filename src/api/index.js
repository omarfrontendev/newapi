import axios from "axios";
import config from "../config";
export default axios.create({
  // baseURL: "https://pick-a.matnsolutions.com/api",
  baseURL: config.SERVER_API_URL || "https://pick-a.matnsolutions.com/api",
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("auth_token")}`,
  },
});
