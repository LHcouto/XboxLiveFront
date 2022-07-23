import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";

import Home from './pages/Home/index'
import Login from "pages/Login";
import CreateAccount from "pages/CreateAccount";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.START} element={<Login/>} />
      <Route path={RoutePath.HOMEPAGE} element={<Home/>}/>
      <Route path={RoutePath.ACCOUNT} element={<CreateAccount/>}/>
      
    </Routes>
  );
};

export default Router;