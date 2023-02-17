import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inscription from "../pages/Inscription";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path={"/inscription"} element={<Inscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
