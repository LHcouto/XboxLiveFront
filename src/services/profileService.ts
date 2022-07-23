import { Profile } from "types/profile-type";
import api from "./api";

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
}


export { findAllProfiles, findProfileById, createProfile};