import login from "assets/imgs/perfil.png";
import background from "assets/imgs/game-pattern.png";
import styled, { css } from "styled-components";
import back from 'assets/icons/back.svg'

import { colors } from "assets/styles/colors";
import theme from "assets/styles/theme";

type ColorInput = {
  posit?: boolean;
  image?: Element;
};
export const Homepage = styled.section`
  ${({ theme }) => css`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
  `}
`;

export const HomepageContent = styled.main`
  ${() => css`
    width: 100%;
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    h2 {
      align-self: flex-start;
    }
  `}
`;

export const HomepageGameDiv = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.baseBg1};
    width: 100%;
    height: 40%;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
    border-radius: 1rem;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: 0.8rem;
  `}
`;

export const uniqueCardGame = styled.div`
  ${({ theme }) => css`
    margin-left: 1rem;
    background-color: ${theme.colors.baseBg2};
    width: 15%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 1rem;
    margin-bottom: 1rem;
    
  
    img {
      width: 80%;
      margin-top: 1rem;
      border-radius: 1rem;
      
    }
  `}
`;
export const HomepageHeaderDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 1rem;
    margin-right: 1rem;
    width: 20%;
    height: 20%;
    box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
    background-color: ${theme.colors.baseBg1};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    padding: 1rem;

  `}
`;

export const HomepageHeaderDetailsDate = styled.div`
  ${({ theme }) => css`
  width: 100%;
  margin-top: 1rem;
    text-transform: capitalize;
    text-align: center;
    font-family: ${theme.constants.bodyFontFamily};

    button {
      list-style: none;
      background-color: ${theme.colors.primaryColor};
      border-radius: 1rem;
      outline: none;
      font-family: ${theme.constants.bodyFontFamily};
      color: ${theme.colors.textColor};
      border: none;
      cursor: pointer;
      transition: ease-in-out 0.3s;

      &:hover {
        transform: scale(1.1);
        background-color: ${theme.colors.shadowColor};
        border-radius: 1rem;
      }
    }
  `}
`;

export const HomepageHeaderDetailsImg = styled.img`
  ${() => css`
    background: url(${login});
    background-size: cover;
    display: flex;
    align-self: center;
    padding: 1.5rem;
    margin-left: 5rem;
    margin-top: 1rem;
  `}
`;
export const iconFavorite = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
margin-right: 1rem;
margin-top: .3rem;
`
export const HomepageHeaderDetailsText = styled.h2`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    font-family: ${theme.constants.headingFontFamily};
    font-size: ${theme.constants.bodyFontSize};
    text-align: center;
    padding: 1rem;
    border-radius: 2rem;
    align-self: center;
    flex-direction: column;
    cursor: pointer;
  `}
`;
export const iconsFavorite = styled.div`
width: 20%;
display: flex;
justify-content: flex-end;
margin: 1rem;


`
export const HomepageGameTitle = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.constants.headingFontFamily};
    margin-top: 1rem;
    color: ${theme.colors.textColor};
    b {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -13px;
        width: 100%;
        height: 4px;
        background-color: ${theme.colors.baseBg2};
        border-radius: 5rem;
      }
    }
  `}
`;

export const settingsIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const BoxProfileModal = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg1};
    width: 350px;
    height: 360px;
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
export const BoxProfileBack = styled.div`
  ${() => css`
    display: flex;
    align-self: flex-end;
    height: 10%;
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

export const BoxProfileText = styled.h3`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    font-family: ${theme.constants.headingFontFamily};
    align-items: center;
    display: flex;
    justify-content: space-around;
  `}
`;

export const BoxProfileForm = styled.div<ColorInput>`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex-direction: column;
  width: 80%;
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

export const favoriteBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

`
export const divGames = styled.div`

  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;


`
export const divGames1 = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  
`