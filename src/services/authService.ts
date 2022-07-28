import swal from "sweetalert";
import api from "./Api";
interface userLoginObjt {
  email: string;
  password: string;
}
const loginService = {
  login: (values: userLoginObjt) =>
    api
      .post("/auth", values)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) =>  swal({
        title: "Erro",
        text: `Usuário ou senha incorretos!`,
        icon: "error",
        timer: 7000,
      })),
};

const userLoggedService = {
  userLogged: () =>
    api
      .get("/auth")
      .then((response: any) => response)
      .then((response: any) => response)
       
      
      .catch((error: any) => {
        swal({
          title: "Erro",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        });
      }),
};



export { loginService, userLoggedService };

