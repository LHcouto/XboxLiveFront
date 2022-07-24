import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";

import Home from './pages/Homepage/index'
import Login from "pages/Login";
import Register from "pages/Register";
import CreateProfilePage from "pages/CreateProfilePage";
import AllGames from "pages/AllGames";
import Profile from "pages/Profiles";


const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login/>} />
      <Route path={RoutePath.HOMEPAGE} element={<Home/>}/>
      <Route path={RoutePath.REGISTER} element={<Register/>}/>
      <Route path={RoutePath.CREATE_PROFILE} element={<CreateProfilePage/>}/>
      <Route path={RoutePath.PROFILE} element={<Profile/>}/>
      <Route path={RoutePath.GAMES} element={<AllGames/>}/>
    </Routes>
  );
};

export default Router;