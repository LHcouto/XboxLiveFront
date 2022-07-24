import { useState } from "react";

import * as S from "./style";
import { createProfile } from "services/profileService";
import { Profile } from "types/profile-type";
import { useNavigate } from "react-router-dom";
import ButtonLarge from "components/ButtonLarge";

const CreateProfile = () => {
  const Navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newProfile: Profile = {
      title: event.currentTarget.Name.value,
      imageUrl: event.currentTarget.imageUrl.value,
    };

    const req = await createProfile.createProfile(newProfile);
    if (req?.status === 201) {
      Navigate("/profile");
    }
  }
  function goToProfiles() {
    Navigate("/profile");
  }
  return (
    <S.BoxPerfil onSubmit={handleSubmit}>
      <S.BoxPerfilBack>
        <img onClick={goToProfiles} />
      </S.BoxPerfilBack>
      <S.BoxPerfilText>Create Profile</S.BoxPerfilText>
      <S.BoxPerfilForm>
        <input type="text" placeholder="Title" name="Name" required />
      </S.BoxPerfilForm>
      <S.BoxPerfilForm>
        <input type="text" placeholder="Image:" name="imageUrl" required />
      </S.BoxPerfilForm>
      <ButtonLarge value="Create" type="submit" />
    </S.BoxPerfil>
  );
};
export default CreateProfile;
