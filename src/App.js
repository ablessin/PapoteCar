import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ButtonAppBar from "./components/core/Navbar";
import React, {useEffect, useState} from "react";
import Login from "./views/Login";

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <ButtonAppBar/>
          <Routes>
              <Route exact path="/connexion"  element={<Login></Login>}/>

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
