import ButtonLarge from "components/ButtonLarge";
import Card from "components/GamesItem";
import SaveButton from "components/SaveButton";
import React, { useEffect, useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { userLoggedService } from "services/authService";
import { createGame, findAllGames } from "services/gameService";
import { findGenres } from "services/genreService";
import { findProfileById } from "services/profileService";
import swall from "sweetalert";
import * as S from "./style";

interface Games {
  id: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;
  gameplayYoutubeUrl: string;
  trailerYoutubeUrl: string;
  genres: [
    {
      name: string;
      createdAt?: string;
      updatedAt?: string;
    }
  ];
}
interface User {
  name: string;
  email: string;
  id: string;
  isAdmin: boolean;
}
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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: "1rem",
  },
};
interface Genres {
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

Modal.setAppElement("#root");

const AllGames = () => {
  const [genres, setGenres] = useState<Genres[]>([]);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profiles>();
  const [controlRefetch, setControlRefetch] = useState<boolean>(false);
  const { id } = useParams();
  const [games, setGames] = useState<Games[]>([]);
  const [userLogged, setUserLogged] = useState<User>({
    email: "",
    name: "",
    id: "",
    isAdmin: false,
  });
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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

      if (response.status === 204) {
        swall({
          title: "Info",
          text: "Não existe jogo cadastrado!",
          icon: "info",
          timer: 7000,
        });
      } else {
        setGames(response.data);
        setControlRefetch(false);
      }
    }
  };
  interface UpGame {
    title: string;
    coverImageUrl: string;
    description: string;
    year: number;
    imdbScore: number;
    gameplayYoutubeUrl: string;
    trailerYoutubeUrl: string;
    genreName: string;
  }
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newGame: UpGame = {
      title: event.currentTarget.Title.value,
      coverImageUrl: event.currentTarget.image.value,
      description: event.currentTarget.description.value,
      year: parseInt(event.currentTarget.year.value),
      imdbScore: parseInt(event.currentTarget.imdbScore.value),
      gameplayYoutubeUrl: event.currentTarget.gameplay.value,
      trailerYoutubeUrl: event.currentTarget.trailer.value,
      genreName: event.currentTarget.genre.value,
    };
    await createGame.create(newGame);
    setControlRefetch(true);

    closeModal();
  }

  const getProfileById = async () => {
    const response = await findProfileById.profileById(id ?? "");
    setProfile(response.data);
  };

  const getAllGenres = async () => {
    const response = await findGenres.allGenres();

    setGenres(response.data);
  };

  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();
    setUserLogged(response.data);
  };
  useEffect(() => {
    if (id) {
      getProfileById();
    }
    getAllGames();
    getUserLogged();
    getAllGenres();
  }, [controlRefetch]);

  function goToHomePage(id: string) {
    navigate(`/homepage/${id}`);
  }
  return (
    <S.allGames>
      <S.allGamesContent>
        <S.adminSettings>
          <AiOutlineRollback
            size={25}
            cursor="pointer"
            onClick={() => {
              goToHomePage(id ?? "");
            }}
          />
          <FiSettings
            size={25}
            display={userLogged.isAdmin ? "flex" : "none"}
            onClick={openModal}
            cursor="pointer"
          />
        </S.adminSettings>

        <h1>All Games</h1>
        {games?.map((game: Games, index) => (
          <Card
            setControl={setControlRefetch}
            game={game}
            key={index}
            user={userLogged}
          />
        ))}
      </S.allGamesContent>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.UserModal onSubmit={handleSubmit}>
          <S.buttonModal>
            <AiOutlineRollback
              onClick={closeModal}
              cursor="pointer"
              size={25}
              color="rgba(183,41,109,0.5)"
            />
          </S.buttonModal>

          <h1>Create Game</h1>

          <label htmlFor="Title">Title:</label>
          <input type="text" name="Title" required />

          <label htmlFor="image">Image:</label>
          <input type="text" name="image" required />

          <label htmlFor="description">Description:</label>
          <input type="text" name="description" required />

          <label htmlFor="year">Year:</label>
          <input type="number" name="year" required />

          <label htmlFor="imdbScore">Score:</label>
          <input type="number" name="imdbScore" required />

          <label htmlFor="trailer">Trailer:</label>
          <input type="url" name="trailer" required />

          <label htmlFor="gameplay">Gameplay:</label>
          <input type="url" name="gameplay" required />

          <label htmlFor="genre">Genre:</label>
          <select name="genre" required>
            {genres?.map((genre: Genres, index) => (
              <option key={index}>{genre.name}</option>
            ))}
          </select>

          <SaveButton></SaveButton>
        </S.UserModal>
      </Modal>
    </S.allGames>
  );
};

export default AllGames;