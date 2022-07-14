import { Routes, Route } from "react-router-dom"
import { RoutePath } from "types/routes";
import Home from 'pages/Home/index';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOMEPAGE} element={<Home />} />
        </Routes>
    );
}

export default Router;