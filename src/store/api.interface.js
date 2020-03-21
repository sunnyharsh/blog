import axios from "axios";

const apiInterface = axios.create({
  baseURL: "base url",
  headers: {
    Accept: "application/json, text/plain",
    "Content-Type": "application/json"
  }
});

export default apiInterface;
