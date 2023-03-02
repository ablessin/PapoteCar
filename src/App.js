import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./configuration/themes/theme";
import Router from "./router";
import ButtonAppBar from "./components/core/Navbar";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <ButtonAppBar />
          <Router />

    </ThemeProvider>
  );
}

export default App;
