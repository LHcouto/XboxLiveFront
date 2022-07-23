import styled, { css } from "styled-components";
import pattern from "assets/imgs/game-pattern.png";

export const CreateAccount = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg2};
		background-image: url(${pattern});
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
	`}
`;

export const CreateAccountContent = styled.main`
	${({ theme }) => css`
		width: 100%;
		height: 100%;
		${theme.mixins.overlay()};
		display: flex;
		justify-content: center;
		align-items: center; ;
	`}
`;