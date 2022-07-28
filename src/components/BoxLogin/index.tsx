import * as S from "./style";
import logo from "assets/imgs/logo.png";
import ButtonLarge from "components/ButtonLarge";
import React, { useState } from "react";
import { loginService } from "./../../services/authService";
import { useNavigate } from "react-router-dom";
import swall from "sweetalert";

const BoxLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handlechangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    console.log(event.target.value);

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const Login = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await loginService.login(values);
    const jwt = response?.data.token;

    if (jwt) {
      localStorage.setItem("jwtLocalStorage", jwt);
      swall({
        title: "Seja bem vindo",
        icon: "success",
        timer: 3000,
      });
      navigate("/profile");
    }
    console.log(response.data);
  };

  function goToRegister() {
    navigate("/register");
  }

  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
          <span>Xbox</span>
          <span>Live</span>
        </S.BoxLoginLogoText>
        <S.BoxLoginLogoImage src={logo} alt="Logo" />
      </S.BoxLoginLogo>
      <S.BoxLoginForm onSubmit={Login}>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={handlechangeValues}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handlechangeValues}
        />
        <ButtonLarge value="Entrar" type="submit" />
        <S.BoxLoginQuestion>
          Não possui uma conta?
          <a onClick={goToRegister}>CLICK AQUI</a>
        </S.BoxLoginQuestion>
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
};

export default BoxLogin;
