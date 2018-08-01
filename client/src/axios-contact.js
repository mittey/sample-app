import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:50507/api/Contact"
});

export default instance;
