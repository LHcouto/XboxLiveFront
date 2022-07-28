import ButtonLarge from "components/ButtonLarge";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createGenre,
  deleteGenre,
  editGenre,
  findGenres,
} from "services/genreService";
import { BiMessageEdit } from "react-icons/bi";
import Modal from "react-modal";
import * as S from "./style";
import swall from "sweetalert";
import { RiDeleteBin5Line } from "react-icons/ri";

interface Genre {
  name: string;
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

Modal.setAppElement("#root");

const CreateGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [handleGenre, setHandleGenre] = useState<string>();
  const [control, setControl] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const getAllGenres = async () => {
    const response = await findGenres.allGenres();
    setGenres(response.data);
    setControl(false);
  };
  const navigate = useNavigate();
  const { id } = useParams();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newGenre: Genre = {
      name: event.currentTarget.Name.value,
    };
    const req = await createGenre.create(newGenre);
    if (req?.status === 201) {
      swall({
        title: "OK!",
        text: "Gênero criado com sucesso!",
        icon: "success",
        timer: 3000,
      });
      setControl(true);
    }
  }

  async function handleSubmitEdit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const upGenre: Genre = {
      name: event.currentTarget.edit.value,
    };
    await editGenre.update(handleGenre ?? "", upGenre);
    swall({
      title: "OK!",
      text: "Gênero alterado com sucesso!",
      icon: "success",
      timer: 3000,
    });
    setControl(true);
    closeModal();
  }
  function goToAllGames() {
    navigate(`/allgames/${id}`);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    getAllGenres();
  }, [control]);

  function openModalWithData(genreName: string) {
    openModal();
    const responseGenre = genreName;

    setHandleGenre(responseGenre);
  }
  console.log(handleGenre, `ESTOU AQUI`);
  return (
    <S.CreateGenre>
      <S.BoxLogin onSubmit={handleSubmit}>
        <S.BoxLoginText>Create Genre</S.BoxLoginText>
        <S.BoxLoginForm1 posit={true}>
          <input type="text" placeholder="Title" name="Name" required />
        </S.BoxLoginForm1>

        <ButtonLarge value="Entrar" type="submit" />
      </S.BoxLogin>
      <S.all>
        <h2>All Genres</h2>
        <S.allGenres>
          {genres?.map((genre: Genre, index) => (
            <S.uniqueGenre key={index}>
              <S.IconEdit>
                <BiMessageEdit
                  size={25}
                  cursor="pointer"
                  onClick={() => {
                    openModalWithData(`${genre.name}`);
                  }}
                  color="#FA27C5"
                />
              </S.IconEdit>
              {genre.name}
            </S.uniqueGenre>
          ))}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <S.BoxLogin onSubmit={handleSubmitEdit}>
              <S.BoxLoginBack>
                <img onClick={closeModal} />
              </S.BoxLoginBack>
              <S.BoxLoginText>Update Genre</S.BoxLoginText>
              <S.BoxLoginForm1 posit={true}>
                <input
                  type="text"
                  placeholder="Title"
                  name="edit"
                  required
                  defaultValue={handleGenre}
                />
              </S.BoxLoginForm1>

              <ButtonLarge value="Entrar" type="submit" />
              <S.organize>
                <S.BoxLoginText>Gostaria de deletar? </S.BoxLoginText>
                <RiDeleteBin5Line
                  size={25}
                  color="red"
                  cursor="pointer"
                  onClick={async () => {
                    await deleteGenre.delete(handleGenre ?? "");
                    setControl(true);
                    closeModal();
                  }}
                />
              </S.organize>
            </S.BoxLogin>
          </Modal>
        </S.allGenres>
      </S.all>
      <S.BoxLoginBack>
        <img onClick={goToAllGames} />
      </S.BoxLoginBack>
    </S.CreateGenre>
  );
};

export default CreateGenre;