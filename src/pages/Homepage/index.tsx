import * as S from "./style";
import { DateTime } from "luxon";
import { findProfileById } from "services/profileService";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
interface Profiles {
  id: string;
  title: string;
  imageUrl: string;
  gameId?: string;
  games?: [];
  favoriteGames?: {
    games?: Games[];
  };
  favoriteGameId?: string;
  userId: string;
}

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

const Homepage = () => {
  const navigate = useNavigate();
  function goToAllGames() {
    navigate("/allgames");
  }
  function goToProfile() {
    navigate("/profile");
  }
  const { id } = useParams();

  const [profileId, setProfileId] = useState<Profiles>();

  const getProfileById = async () => {
    const response = await findProfileById.profileById(id ?? "");
    console.log(response.data);
    setProfileId(response.data);
  };
  useEffect(() => {
    if (id) {
      getProfileById();
    }
  }, []);
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  return (
    <S.Homepage>
      <S.HomepageContent>
        <S.HomepageGameTitle>Favorited Games</S.HomepageGameTitle>
        <S.HomepageGameDiv>
          {profileId?.favoriteGames?.games?.map((game: Games, index) => (
            <S.uniqueCardGame key={index}>
              <img src={game.coverImageUrl} alt="" />
              <h1>{game.title}</h1>
              <p>Score: {game.imdbScore}</p>
            </S.uniqueCardGame>
          ))}
        </S.HomepageGameDiv>
        <S.HomepageGameTitle>Purchased Games</S.HomepageGameTitle>
        <S.HomepageGameDiv>
          {profileId?.games?.map((game: Games, index) => (
            <S.uniqueCardGame key={index}>
              <img src={game.coverImageUrl} alt="" />
              <h1>{game.title}</h1>
              <p>Score: {game.imdbScore}</p>
            </S.uniqueCardGame>
          ))}
        </S.HomepageGameDiv>
      </S.HomepageContent>
      <S.HomepageHeaderDetails>

        <S.HomepageHeaderDetailsDate>
        <img onClick={goToProfile}/>
          <S.HomepageHeaderDetailsImg />
          <S.HomepageHeaderDetailsText onClick={goToProfile}>
            {profileId?.title}
          </S.HomepageHeaderDetailsText>
          <S.HomepageHeaderDetailsText>
            {dateDescription}
          </S.HomepageHeaderDetailsText>
          <button onClick={goToAllGames}>MORE GAMES</button>
        </S.HomepageHeaderDetailsDate>
      </S.HomepageHeaderDetails>
    </S.Homepage>
  );
};

export default Homepage;