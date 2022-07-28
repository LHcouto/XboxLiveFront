import api from './api'


const homepageGames = {
    allGames: (id:string) =>
    api.get(`/homepage/${id}`)
    .then((response:any)=> response).catch((error:any)=>
      alert(error))
}

export {homepageGames}