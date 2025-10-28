import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", //backend base url
  withCredentials: true, //to allow cookies and JWT
});

export default API;
