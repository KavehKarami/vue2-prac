import axios from "axios";

const newAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default {
  getUsers() {
    return newAxios.get("/users");
  },
  getUser(id) {
    return newAxios.get("/users/" + id);
  },
};
