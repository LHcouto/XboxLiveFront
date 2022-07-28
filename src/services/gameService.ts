import api from './Api'
import swal from 'sweetalert'


interface Games{

    title: string,
    coverImageUrl: string,
    description: string,
    year: number,
    imdbScore: number,
    trailerYoutubeUrl: string,
    gameplayYoutubeUrl: string,
    genreName: string,
}
const findAllGames ={
    allGames: () =>
    api.get('/game')
    .then((response: any)=>{
        return response;
    })
    .catch((error:any)=> console.log(error))
}

const findUnique ={
  oneGame: (id:string)=>
  api.get(`/game/${id}`)
  .then((response:any)=>response)
  .catch((error:any)=>{
    swal({
        title: "Erro!",
        text: `${error.message}`,
        icon: "error",
        timer: 5000,
      })
})
}

const deleteGame ={
    delete: (id:string)=>
    api.delete(`/game/${id}`)
    .then((response: any)=> {
    swal({
        title: "Sucesso!",
        text: `${response.name} deletado!`,
        icon: "success",
        timer: 5000,
      })
    })
    .catch((error:any)=>{
        swal({
            title: "Erro!",
            text: `${error.message}`,
            icon: "error",
            timer: 5000,
          })
    })
}

const updateGame = {
    update: (id: string, game: Games) =>
    api.patch(`/game/${id}`,{
       
        title: game.title,
        coverImageUrl: game.coverImageUrl,
        description: game.description,
        year: game.year,
        imdbScore: game.imdbScore,
        trailerYoutubeUrl: game.trailerYoutubeUrl,
        gameplayYoutubeUrl: game.gameplayYoutubeUrl,
        genreName: game.genreName,
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

const createGame = {
  create: async (newGame: Games) =>
  api.post(`/game`,{
    title: newGame.title,
    coverImageUrl: newGame.coverImageUrl,
    description: newGame.description,
    year: newGame.year,
    imdbScore: newGame.imdbScore,
    trailerYoutubeUrl: newGame.trailerYoutubeUrl,
    gameplayYoutubeUrl: newGame.gameplayYoutubeUrl,
    genreName: newGame.genreName,
  })
  .then((response:any)=>response)
  .catch((error: any) => {
    swal({
      title: "Erro!",
      text: `${error.message}`,
      icon: "error",
      timer: 7000,
    })
  })
}

export {findAllGames, deleteGame, updateGame, createGame, findUnique};