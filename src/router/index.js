import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inscription from "../pages/Inscription";
import Connexion from "../pages/Login";
import Trajet from "../pages/Trajet";
import Home from "../pages/Home";
import NotFound from "../pages/404";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route exact path={"/inscription"} element={<Inscription/>}/>
                    <Route exact path={"/connexion"} element={<Connexion/>}/>
                    <Route exact path={"/trajet"} element={<Trajet/>}/>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route path={"*"} element={<NotFound/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
