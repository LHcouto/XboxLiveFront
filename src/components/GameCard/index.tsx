import * as S from "./style";

interface Games {
    id?: string; 
    title: string;
    coverImageUrl: string;
    description: string;
    year: number;
    imdbScore: number;
    trailerYoutubeUrl: string;
    gameplayYoutubeUrl: string;
    genreName?: string;
}