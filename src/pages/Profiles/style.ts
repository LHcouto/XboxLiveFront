import styled, { css } from "styled-components";
import background from "assets/imgs/game-pattern.png";
import user from "assets/imgs/perfil.png";

export const ProfileContent = styled.section`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
  `}
`;
export const ProfileMain = styled.main`
  ${() => css`
    width: 100%;

    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  `}
`;
export const ProfileHeaderDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 0.2rem;

    background-color: ${theme.colors.baseBg1};
    border-radius: 10px;
  `}
`;

export const ProfileHeaderDetailsImg = styled.img`
  ${() => css`
    background-size: cover;
    display: flex;
    justify-content: flex-Homepage;
    padding: 2.5rem;
    margin-right: 2rem;
  `}
`;

export const allCardProfile = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
    width: 95%;
    height: 50%;
    align-items: center;
    display: flex;
    justify-content: space-around;
  `}
`;

export const uniqueCardProfile = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 2rem;
    cursor: pointer;

    img {
      width: 50%;
      margin-top: 1rem;
      border-radius: 2rem;
    }
  `}
`;

export const Header = styled.div`
  margin: 1rem 0rem 1rem 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Settings = styled.div`
  ${({ theme }) => css`
    width: 3%;
    background-color: ${theme.colors.baseBg2};
    height: 50%;
    margin: 1rem 1rem 2rem 0.5rem;
    display: flex;
    border-radius: 1rem;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `}
`;

export const userLogged = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    width: 10%;
    height: 50%;
    border-radius: 1rem;
    align-items: center;
    display: flex;
    justify-content: space-around;
    align-self: flex-start;
    img {
      background-image: url(${user});
      background-size: cover;
      padding: 0.8rem;
      display: flex;
    }
    h5 {
      font-family: ${theme.constants.bodyFontFamily};
    }
  `}
`;

export const buttonModal = styled.button`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: transparent;
  border: none;
  button {
    border: none;
    background-color: transparent;
    display: flex;
    cursor: pointer;

    margin: 0;
  }
`;
export const UserModal = styled.form`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    justify-content: center;
    flex-direction: column;
    align-items: center;

    label {
      align-self: flex-start;
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 1rem;
      font-weight: ${theme.constants.bodyLineHeight};
      margin-bottom: 0.1rem;
      color: ${theme.colors.textColor};
    }
    input {
      background-color: ${theme.colors.baseBg2};
      margin-bottom: 1rem;
      width: 100%;
      border-radius: 2rem;
      border: 1px solid black;
      outline: none;
      padding: 0.5rem;
    }
  `}
`;
export const userModalTitle = styled.h5`
  ${({ theme }) => css`
    font-family: ${theme.constants.headingFontFamily};
    color: ${theme.colors.textColor};
    font-size: 1rem;
  `}
`;

export const buttonDelete = styled.div`
  ${({ theme }) => css`
    width: 20%;
    background: transparent;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  `}
`;
export const deleteModalext = styled.h3`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    font-family: ${theme.constants.headingFontFamily};
    align-items: center;
    display: flex;
    justify-content: space-around;
  `}
`;
