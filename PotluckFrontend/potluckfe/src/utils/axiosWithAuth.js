import axios from "axios";

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:3300/",

    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;