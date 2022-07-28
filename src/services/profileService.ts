import { Profile } from "types/profile-type";
import api from "./api";
import swal from 'sweetalert'
const findAllProfiles = {
  allProfiles: () =>
    api
      .get("/profile")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log(error)),
};

const findProfileById = {
  profileById: (profileId: string) =>
    api
      .get(`/profile/${profileId}`)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log(error)),
};

const createProfile = {
  createProfile: async (newProfile: Profile)=>
  api
  .post('/profile', newProfile)
  .then((response: any)=> {
    return response;
  })
  .catch((error:any)=>console.log(error))
}

const deleteProfile = {
  delete: (id: string) =>
  api.delete(`/profile/${id}`)
    .then((response: any) => response)
    .catch((error: any) => {
      swal({
        title: "Erro!",
        text: `${error.message}`,
        icon: "error",
        timer: 7000,
      })
    })
}

const updateProfile = {
  update: (id: string, profile: Profile) =>
  api.patch(`/profile/${id}`,{
    title: profile.title,
    imageUrl: profile.imageUrl
  })
  .then((response:any)=> response)
  .catch((error: any) => {
    swal({
      title: "Erro!",
      text: `${error.message}`,
      icon: "error",
      timer: 7000,
    })
  })
}

const favoriteGame = {
  favorite:async (profileId:string, gameId: string)=>{

  api.patch(`/profile/favoriteGame/${profileId}`,{
    favoriteGameId: gameId,
  })
  .then((response:any)=> 
  {
    swal({
      title: "success",
      text: `${response.message}`,
      icon: "success",
      timer: 7000,
    })
 
  })

  .catch((error: any) => {
    swal({
      title: "Erro!",
      text: `${error.message}`,
      icon: "error",
      timer: 7000,
    })
  })
}
}

const PurchaseGame ={
  purchase:(profileId: string, gameId:string)=>{
    api.patch(`/profile/${profileId}`,{
      gameId: gameId
    })
    .then((response:any)=> 
    {
      swal({
        title: "success",
        text: `${response.message}`,
        icon: "success",
        timer: 7000,
      })
   
    })
  
    .catch((error: any) => {
      swal({
        title: "Erro!",
        text: `${error.message}`,
        icon: "error",
        timer: 7000,
      })
    })
  }
}

export { findAllProfiles, findProfileById, createProfile, deleteProfile, updateProfile, favoriteGame, PurchaseGame};
