import ButtonLarge from "components/ButtonLarge";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "services/userService";
import { User } from "types/user-type";
import * as S from "./style";

const BoxRegister = () => {
  let Navigate = useNavigate();
  function goToStart() {
    Navigate("/");
  }

  const [user, setUser] = useState<User>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newUser: User = {
      name: event.currentTarget.Name.value,
      email: event.currentTarget.email.value,
      cpf: event.currentTarget.cpf.value,
      password: event.currentTarget.password.value,
      confirmPassword: event.currentTarget.confirmPassword.value,
    };
    const req = await userService.postUser(newUser);
    if (req?.status === 201) {
      Navigate("/");
    }
  }

  return (
    <S.BoxRegister onSubmit={handleSubmit}>
      <S.BoxRegisterBack>
        <img onClick={goToStart} />
      </S.BoxRegisterBack>
      <S.BoxRegisterText>Create User</S.BoxRegisterText>
      <S.BoxRegisterForm>
        <input type="text" placeholder="Name" name="Name" id="Name" />
      </S.BoxRegisterForm>
      <S.BoxRegisterForm>
        <input type="email" placeholder="E-mail" name="email" id="email" />
      </S.BoxRegisterForm>
      <S.BoxRegisterForm>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />
      </S.BoxRegisterForm>
      <S.BoxRegisterForm>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
        />
      </S.BoxRegisterForm>
      <S.BoxRegisterForm>
        <input type="text" placeholder="CPF" name="cpf" id="cpf" />
      </S.BoxRegisterForm>
      <ButtonLarge value="Create" type="submit" />
    </S.BoxRegister>
  );
};

export default BoxRegister;
