import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";

import Home from './pages/Homepage/index'
import Login from "pages/Login";
import Register from "pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login/>} />
      <Route path={RoutePath.HOMEPAGE} element={<Home/>}/>
      <Route path={RoutePath.REGISTER} element={<Register/>}/>
      
    </Routes>
  );
};

export default Router;