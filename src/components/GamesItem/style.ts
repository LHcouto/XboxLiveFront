import styled, { css } from "styled-components";
import back from "assets/icons/back.svg";
export const GamesItem = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg1};
    border-radius: 16px;
    display: flex;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: 0.8rem;
    align-items: center;
    justify-content: center;
    width: 30%;

    margin-bottom: 1rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
    }
  `}
`;
export const admIcons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  div {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;
export const GamesItemImage = styled.img`
  width: 150px;
  border-radius: 2rem;
  padding: 1rem;
  cursor: pointer;
`;

export const GamesItemName = styled.h3`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
  `}
`;

export const GamesItemPrice = styled.strong`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    color: ${theme.colors.primaryColor};
  `}
`;

export const GamesItemDescription = styled.small`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    font-size: 12px;
  `}
`;

export const ModalStyle = styled.form`
${({theme})=>css`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${theme.constants.headingFontFamily};
  font-size: 1rem;

  button {
    background: transparent;
    border: none;
    justify-content: flex-end;
    align-items: flex-end;
  }
  img {
    background: url(${back});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0.5rem;
    cursor: pointer;
  }
  label{
    color: ${theme.colors.textColor}
  }
  input {
    margin: .5rem 0 .5rem 0;
    outline: none;
    width: 100%;
    border-radius: 2rem;
    align-self: center;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: .8rem;
  }
  textarea{
    margin: .5rem 0 .5rem 0;
    border-radius: .5rem;
  }
  `}
`;