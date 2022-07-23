import * as S from "./style";
import logo from "assets/imgs/logo.png";
import ButtonLarge from "components/ButtonLarge";
import React, { useState } from "react";
import { loginService } from "./../../services/authService"

const BoxLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handlechangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    console.log(event.target.value);

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const Login = async (event: React.SyntheticEvent) =>{
    event.preventDefault()
    const response = await loginService.login(values)
    const jwt = response?.data.token
    if (jwt){
      localStorage.setItem("jwt",jwt)
      alert("usuario logado")
    }
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
          <a>CLIQUE AQUI</a>
        </S.BoxLoginQuestion>
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
};

export default BoxLogin;
