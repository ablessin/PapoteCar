import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inscription from "../pages/Inscription";
import Connexion from "../pages/Login";
import Home from "../pages/Home";
import Discussion from "../pages/Discussion";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path={"/inscription"} element={<Inscription />} />
          <Route exact path={"/connexion"} element={<Connexion />} />
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/discussion"} element={<Discussion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
