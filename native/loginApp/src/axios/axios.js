import axios from "axios";

const api = axios.create({
  baseURL: "http://10.89.234.169:5000/api/v1/",
  headers: {
    accept: "application/json",
  },
});

const sheets = {
  postLogin: (user) => api.post("login/", user),
};

export default sheets