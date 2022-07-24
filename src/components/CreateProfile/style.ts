import back from "assets/icons/back.svg";
import { colors } from "assets/styles/colors";
import theme from "assets/styles/theme";
import styled, { css } from "styled-components";

export const BoxPerfil = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    width: 330px;
    height: 414px;
    padding: 20px 20px 35px 20px;
    margin: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
    color: ${theme.colors.textColor};
  `}
`;

export const BoxPerfilForm = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    input {
      ${theme.mixins.input()};
      color: ${theme.colors.textColor};
      font-family: ${theme.constants.bodyFontFamily};
      font-size: ${theme.constants.bodyFontSize};
    }
  `}
`;

export const BoxPerfilText = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.constants.headingFontFamily};
  `}
`;

export const BoxPerfilBack = styled.div`
  ${() => css`
    display: flex;
    align-self: flex-start;
    height: 10%;
    img {
      background: url(${back});
      background-size: 80px;
      display: flex;
      align-self: flex-start;
      padding: 1.5rem;
      cursor: pointer;
      align-self: flex-end;
    }
  `}
`;
