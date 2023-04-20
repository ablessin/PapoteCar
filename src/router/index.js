import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inscription from "../pages/Inscription";
import Connexion from "../pages/Login";
import Trajet from "../pages/Trajet";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Discussion from "../pages/Discussion";
import Map from "../pages/DashboardTrajet";
import TrajetDetails from "../pages/TrajetDetails";
import DashboardTrajet from "../pages/DashboardTrajet";
import NouveauTrajet from "../pages/NouveauTrajet";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path={"/inscription"} element={<Inscription />} />
          <Route exact path={"/connexion"} element={<Connexion />} />
          <Route exact path={"/trajet"} element={<Trajet />} />
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/discussion"} element={<Discussion />} />
          <Route exact path={"/trajet/details"} element={<TrajetDetails />} />
          <Route exact path={"/profil"} element={<Profile />} />
          <Route exact path={"/dashboard"} element={<DashboardTrajet />} />
          <Route exact path={"/NouveauTrajet"} element={<NouveauTrajet />} />
          <Route path={"*"} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
