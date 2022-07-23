import * as S from './style'

interface cardProps {
  game: {
    id: string;
    title: string;
    coverImageUrl: string;
    description: string;
    year: number;
    imdbScore: number;
    trailerYoutubeUrl: string;
    genres: string;

  }
} 


const Card = ({ game }: cardProps) => {
  return (
    <S.GamesItem>
      <S.GamesItemImage src={game.coverImageUrl}  alt="Imagem do jogo"/>


      <div>
        <h2>{game.title}</h2>
        <p>{game.imdbScore}</p>
        
      </div>
      </S.GamesItem>
  )
}

export default Card;