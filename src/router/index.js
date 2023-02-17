import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inscription from "../pages/Inscription";
import Connexion from "../pages/Login"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path={"/inscription"} element={<Inscription />} />
          <Route exact path={"/connexion"} element={<Connexion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
