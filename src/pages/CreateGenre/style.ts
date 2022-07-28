
import back from "assets/icons/back.svg";
import { colors } from "assets/styles/colors";
import theme from "assets/styles/theme";
import styled, { css } from "styled-components";
import background from "assets/imgs/game-pattern.png";
type ColorInput = {
  posit?: boolean;
  image?: Element;
};
export const CreateGenre = styled.section`
  ${({ theme }) => css`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `}
`;

export const BoxLogin = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg1};
    width: 250px;
    height: 400px;
    padding: 10px 20px 35px 20px;
    margin: 30px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    box-shadow: 3px 3px 6px 3px ${theme.colors.baseBg3};
    color: ${theme.colors.textColor};
  `}
`;
export const BoxLoginBack = styled.div`
  ${() => css`
    display: flex;
    align-self: flex-start;
    height: 10%;
    margin: 1rem;

    img {
      background: url(${back});
      background-size: contain;
      display: flex;
      align-self: flex-start;
      padding: 1.5rem;
      cursor: pointer;
      align-self: flex-end;
    }
  `}
`;
export const BoxLoginText = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.constants.headingFontFamily};
  `}
`;
export const BoxLoginForm1 = styled.div<ColorInput>`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  width: 80%;
  flex-direction: column;
  input {
    background-color: ${(props) => {
      if (props.posit) {
        return colors.baseBg2;
      } else {
        return colors.baseBg1;
      }
    }};
    border: ${(props) => {
      if (props.posit) {
        return `3px solid ${colors.baseBg2}`;
      } else {
        return `3px solid ${colors.baseBg1}`;
      }
    }};
    border-radius: 4px;
    outline: none;
    width: 100%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: ${theme.constants.bodyFontSize};
    color: ${theme.colors.textColor};
  }
`;
export const all = styled.div`
${({theme})=>css`

  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    font-family: ${theme.constants.headingFontFamily};
  }
  `}
`;
export const allGenres = styled.div`
  ${({ theme }) => css`
    width: 70%;
    padding: 1rem;
    display: flex;
    background-color: ${theme.colors.baseBg1};
    flex-wrap: wrap;
    border-radius: 1rem;
    align-items: center;
    justify-content: space-around;
    h2 {
      font-family: ${theme.constants.headingFontFamily};
      flex-direction: column;
    }
  `}
`;

export const uniqueGenre = styled.div`
  ${({ theme }) => css`
    width: 20%;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: 1rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 1rem;
    display: flex;
    padding: .5rem;
    margin: .5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`;

export const IconEdit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const organize = styled.div`
  width: 100%;
  display: flex;
align-items: center;
justify-content: center;
padding: 1rem;

`