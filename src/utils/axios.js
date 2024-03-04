import axios from "axios";

const instance = axios.create({
  baseURL: "https://medicine-delivery-app-backend-hkda.onrender.com",
});

export default instance;
