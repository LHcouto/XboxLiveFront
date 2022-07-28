import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findUnique } from "services/gameService";
import * as S from "./style";
import {useNavigate} from 'react-router-dom'

interface Games {
  id?: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;
  trailerYoutubeUrl: string;
  gameplayYoutubeUrl: string;
  genreName: string;
}

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [game, setGame] = useState<Games>();
  const getUniqueGame = async () => {
    if (id) {
      const response = await findUnique.oneGame(id);
      setGame(response.data);
    }
  };

  
  function goToAll(){
    navigate(`/allgames/`)
  }
  useEffect(() => {
    getUniqueGame();
  }, []);

  return (
    <S.Details>

      <S.DetailsContent>
        <S.title>{game?.title}</S.title>
        <S.img>
          <img src={game?.coverImageUrl} alt="imagem do jogo"/>
          
        </S.img>
        <S.description>
        {game?.description}
        </S.description>
        <S.resume>
          <div>
          <h3>Score:</h3>
          <p>{game?.imdbScore}</p>
          </div>
          <div>
            <h3>ANO:</h3>
            <p>{game?.year}</p>
          </div>
          
        </S.resume>

      </S.DetailsContent>
      <S.BoxProfileBack>
        <img onClick={goToAll} />
        </S.BoxProfileBack>
    </S.Details>
  );
};

export default Details;