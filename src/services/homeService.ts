import api from './Api'
import swall from 'sweetalert'

const homepageGames = {
    allGames: (id:string) =>
    api.get(`/homepage/${id}`)
    .then((response:any)=> response).catch((error:any)=>
      alert(error))
}

export {homepageGames}