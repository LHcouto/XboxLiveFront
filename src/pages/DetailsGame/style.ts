import styled, { css } from "styled-components";
import background from "assets/imgs/game-pattern.png";
import back from 'assets/icons/back.svg';
export const Details = styled.section`
  ${({ theme }) => css`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const DetailsContent = styled.main`
  ${({ theme }) => css`
    width: 50%;
    padding: 20px;
    overflow: auto;
    height: 90vh;
    box-sizing: border-box;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: ${theme.colors.baseBg1};
    border-radius: 1rem;
  `}
`;

export const title = styled.h3`
  ${({ theme }) => css`
    width: 100%;
    font-family: ${theme.constants.headingFontFamily};
    text-align: center;
  `}
`;
export const img = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 40%;
    border-radius: 1rem;
  }
  iframe {
    width: 40%;
    margin-left: 1rem;
  }
`;

export const description = styled.p`
  ${({ theme }) => css`
    width: 100%;
    font-family: ${theme.constants.bodyFontFamily};
  `}
`;

export const resume = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div{
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    h3{
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 1.2rem;
      align-items: center;
    }
    p{
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 1.5rem;
      
      align-items: center;
    }
  `}
`;
export const BoxProfileBack = styled.div`
  ${() => css`
    display: flex;
    align-self: flex-start;
    height: 10%;
    margin-left: 2rem;
    img {
      background: url(${back});
      background-size: contain;
      display: flex;

      padding: 1.5rem;
      cursor: pointer;
  
    }
  `}
`;