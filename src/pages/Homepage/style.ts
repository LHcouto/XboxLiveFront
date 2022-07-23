import styled, { css } from "styled-components";
import background from "assets/imgs/game-pattern.png";
import login from "assets/imgs/perfil.png";
import search from "assets/icons/search.svg";

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
    h2{
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
    border-radius: 1rem;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: .8rem;
  `}
`;
export const uniqueCardGame = styled.div`
  ${({ theme }) => css`
    margin-left: 1rem;
    background-color: ${theme.colors.baseBg2};
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 1rem;
    cursor: pointer;
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
  
    width: 20%;
    height: 20%;
    background-color: ${theme.colors.baseBg1};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    
  `}
`;

export const HomepageHeaderDetailsDate = styled.p`
  ${({ theme }) => css`
    text-transform: capitalize;
    text-align: center;
    font-family: ${theme.constants.bodyFontFamily};

    button{
      list-style: none;
      background-color: ${theme.colors.baseBg3};
      border-radius: 1rem;
      outline: none;
      font-family: ${theme.constants.bodyFontFamily};
      color: ${theme.colors.textColor};
      border: none;
      cursor: pointer;
      transition: ease-in-out .3s;

      &:hover{
        transform: scale(1.1);
        background-color: ${theme.colors.baseBg3};
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

export const HomepageGameList = styled.div`
  ${() => css`
    margin-top: 25px;
    padding-bottom: 25px;
  `}
`;
export const HomepageGameListGap = styled.div`
  ${({ theme }) => css`
    width: 200px;
  `}
`;