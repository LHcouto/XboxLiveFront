import * as S from "./style";
import { findAllGames } from "services/gameService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swall from "sweetalert";

import Card from "components/GamesItem";
import { userLoggedService } from "services/authService";

interface Games {
  id: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;

  trailerYoutubeUrl: string;
  genres: string;
}
interface User {
    name: string;
    email: string;
    _id: string;
    isAdmin: boolean;
  }

const AllGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [userLogged, setUserLogged] = useState<User>({
    email: '',
    name: '',
    _id: '',
    isAdmin: false,
  });
  const navigate = useNavigate();

  const jwt = localStorage.getItem("jwt");

  const getAllGames = async () => {
    if (!jwt) {
      swall({
        title: "ERRO",
        text: "Faça o Login antes de entrar na página de games",
        icon: "error",
        timer: 7000,
      });
      navigate("/");
    } else {
      const response = await findAllGames.allGames();
      if(response.status === 204){
        swall({
            title: 'Info',
            text: 'Não existe jogo cadastrado!',
            icon: 'info',
            timer: 7000,
        })
      }else{
        console.log(response.data)
        setGames(response.data);
      }
    }
  };


  const getUserLogged = async ()=>{
 
    const response = await userLoggedService.userLogged();

    setUserLogged(response.data);

  }
  useEffect(() => {
    getAllGames();
    getUserLogged();
  },[]);
  return (
    <S.allGames>
       
      <S.allGamesContent>
        <h1>All Games</h1>
        {games?.map((game: Games, index) => (
          <Card game={game} key={index} />
        ))}
      </S.allGamesContent>
    </S.allGames>
  );
};

export default AllGames;