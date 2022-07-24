import styled, { css } from "styled-components";

export const ProfilesItem = styled.div`
	${({ theme }) => css`
		background: ${theme.colors.baseBg1};
		border-radius: 16px;
		display: flex;
		font-family: ${theme.constants.bodyFontFamily};
		font-size: .8rem;
		align-items: center;
		justify-content: center;
		width: 50%;

		margin-bottom: 1rem;
		cursor: pointer;
	
		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 80%;

		}
	`}
`;

export const ProfilesItemImage = styled.img`

		width: 150px;
		

`;

export const ProfilesItemName = styled.h3`
	${({ theme }) => css`
		${theme.mixins.bodyStyle()}
		text-align: center;
		max-width: 90%;
		margin: 0;
	`}
`;

export const ProfilesItemPrice = styled.strong`
	${({ theme }) => css`
		${theme.mixins.bodyStyle()}
		text-align: center;
		max-width: 90%;
		margin: 0;
		color: ${theme.colors.primaryColor};
	`}
`;

export const ProfilesItemDescription = styled.small`
	${({ theme }) => css`
		${theme.mixins.bodyStyle()}
		text-align: center;
		max-width: 90%;
		margin: 0;
		font-size: 12px;
	`}
`;