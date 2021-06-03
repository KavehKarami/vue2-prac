import axios from "axios";

const newAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default {
  async getUsers() {
    return await newAxios.get("/users");
  },
};
