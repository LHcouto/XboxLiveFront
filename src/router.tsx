import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";

import Home from './pages/Homepage/index'
import Login from "pages/Login";
import Profile from "pages/Profiles";
import AllGames from "pages/AllGames";
import CreateProfilePage from "pages/CreateProfilePage";
import CreateGenre from "pages/CreateGenre";
import Register from "pages/Register";


const Router = () => {
  interface props{
    id: string;
    profile: string;
  }
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login/>} />
      <Route path={RoutePath.HOMEPAGE} element={<Home/>}/>
      <Route path={RoutePath.REGISTER} element={<Register/>}/>
      <Route path={RoutePath.PROFILE} element={<Profile/>}/>
      <Route path={RoutePath.GAMES} element={<AllGames/>}/>
      <Route path={RoutePath.CREATE_PROFILE} element={<CreateProfilePage/>}/>
      <Route path={RoutePath.CREATE_GENRE} element={<CreateGenre/>}/>
     
    </Routes>
  );
};

export default Router;