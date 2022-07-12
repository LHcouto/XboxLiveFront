import theme from 'assets/styles/theme';

type Theme = typeof theme;

declare module 'styled=components' {
    export interface DefaultTeheme extends Theme {}
}