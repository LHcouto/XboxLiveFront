import SaveButton from "components/SaveButton";
import { useEffect, useState } from "react";
import { AiOutlineLogout, AiOutlineRollback } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { userLoggedService } from "services/authService";
import { findAllProfiles } from "services/profileService";
import { userService } from "services/userService";
import swall from "sweetalert";
import * as S from "./style";
interface Profiles {
  id: string;
  title: string;
  imageUrl: string;
  gameId?: string;
  favoriteGameId?: string;
  userId: string;
}
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
}
interface upUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
Modal.setAppElement("#root");

const Profile = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<Profiles[]>([]);
  const [userLogged, setUserLogged] = useState<User>({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
  });

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
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const [profileUser, setProfileUser] = useState<Profiles[]>([]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const upUser: upUser = {
      name: event.currentTarget.Name.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      confirmPassword: event.currentTarget.confirmPass.value,
    };
    await userService.UpUser(userLogged.id, upUser);
    swall({
      title: "OK!",
      text: "Usuário alterado com sucesso!",
      icon: "success",
      timer: 3000,
    });
    closeModal();
    getUserLogged();
  }
  useEffect(() => {
    getUserLogged();
    getAllProfiles();
  }, []);
  const jwt = localStorage.getItem("jwt");

  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();

    localStorage.setItem("idUser", response.data.id);
    setUserLogged(response.data);
  };

  const getAllProfiles = async () => {
    if (!jwt) {
      swall({
        title: "ERRO!",
        text: "Faça o login antes de entrar na página de profiles",
        icon: "error",
        timer: 7000,
      });
      navigate("/");
    } else {
      const response = await findAllProfiles.allProfiles();

      setProfiles(response.data);

      if (profiles) {
        findProfiles(response.data);
      }
    }
  };
  function goToCreateProfile() {
    navigate("/createprofile");
  }
  const findProfiles = (profiles: Profiles[]) => {
    const userId = localStorage.getItem("idUser");
    const profile = profiles.filter(
      (profile: any) => profile.userId === userId
    );

    if (profile) {
      setProfileUser(profile);
    }

  };

  function goToHomePage(id: string) {
    navigate(`/homepage/${id}`);
  }

function logout (){
setUserLogged({
  id: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  cpf: "",
})
localStorage.removeItem(`jwt`)

swall({
  title: "OK!",
  text: "Usuário deslogado com sucesso!",
  icon: "success",
  timer: 5000,

})
navigate('/')
}
  

  return (
    <S.ProfileContent>
      <S.ProfileMain>
        <S.Header>
          <S.userLogged>
            <img />
            <h5>{userLogged.name}</h5>
          </S.userLogged>
          <S.Settings>
            <FiSettings
              cursor="pointer"
              onClick={openModal}
              color="rgba(86,120,244,0.5)"
            />
          </S.Settings>
        </S.Header>

        <S.allCardProfile>
          {profileUser?.map((profile, index) => (
            <S.uniqueCardProfile key={index}>
              <img
                src={profile.imageUrl}
                alt="imagem do perfil"
                onClick={() => {
                  goToHomePage(profile.id);
                }}
                key={index}
              />
              <h1>{profile.title}</h1>
            
            </S.uniqueCardProfile>
          ))}
          <S.uniqueCardProfile>
            <IoPersonAddOutline size={50} onClick={goToCreateProfile} />
          </S.uniqueCardProfile>
        </S.allCardProfile>
      </S.ProfileMain>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <S.buttonModal>
          <button onClick={closeModal}>
            <AiOutlineRollback size={25} color="rgba(183,41,109,0.5)" />
          </button>
        </S.buttonModal>
        <S.UserModal onSubmit={handleSubmit}>
          <S.userModalTitle>Update User</S.userModalTitle>
          <label htmlFor="name">Name:</label>
          <input type="text" name="Name" defaultValue={userLogged.name} />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" defaultValue={userLogged.email} />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            name="password"
            defaultValue={userLogged.password}
          />
          <label htmlFor="confirmPass">Confirm Pass:</label>
          <input
            type="password"
            required
            name="confirmPass"
            defaultValue={userLogged.confirmPassword}
          />
          <label htmlFor="cpf">CPF:</label>
          <input type="text" name="cpf" defaultValue={userLogged.cpf} />
          <SaveButton type="submit" />
          <S.deleteModalext>
          Gostaria de deslogar?{" "}
              <AiOutlineLogout
                size={25}
                color="red"
                cursor="pointer"
                onClick={logout}
              />
              </S.deleteModalext>
        </S.UserModal>
      </Modal>
    </S.ProfileContent>
  );
};
export default Profile;