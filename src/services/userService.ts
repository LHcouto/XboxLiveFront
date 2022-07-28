import axios from "axios";
import api from "./Api";
import { User } from "types/user-type";
import swal from "sweetalert";
axios.defaults.baseURL = "https://projetobluemodulo4.herokuapp.com/";

axios.defaults.headers.post["Content-Type"] = "application/json";
export const userService = {
  postUser: async (newUser: User) => {
    try {
      const req = await axios.post("/user", newUser);
      return req;
    } catch (err) {
      alert(err);
    }
  },

  UpUser: async (userId: string, User: User) => {
    try {
      const req = await api.patch(`/user/${userId}`, {
        name: User.name,
        email: User.email,
        password: User.password,
        confirmPassword: User.confirmPassword,
        cpf: User.cpf,
      });
      return req;
    } catch (err) {
      alert(err);
    }
  },
  deleteUser: async (id: string) => {
    api
      .delete(`/user/${id}`)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Erro!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        });
      });
  },
};
