import { css } from 'styled-components';
import { colors } from 'assets/styles/colors';
import { constants } from 'assets/styles/constants';
import down from 'assets/icons/down.svg';

const logoStyle = () => css`
   font-family: ${constants.logoFontFamily};
   font-size: ${constants.logoFontSize};
   line-height: ${constants.logoLineHeight};
   `;

   const headsingStyle = () => css`
   font-family: ${constants.headingFontFamily};
   fonto-size: ${constants.headingFontSize};
   line-height: ${constants.headingLineHeight};
   `;

   const bodyStyle = () => css`
   font-family: ${constants.bodyFontFamily};
   font-size: ${constants.bodyFontSize};
   line-height: ${constants.bodyLineHeight};
   `;