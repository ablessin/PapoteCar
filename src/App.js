import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./configuration/themes/theme";
import Router from "./router";
import ButtonAppBar from "./components/core/Navbar";
import Footer from "./components/core/Footer";
import { Box } from "@mui/material";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ButtonAppBar/>
            <Router/>
            <Box mt={5} mb={2}/>
            <Footer />
        </ThemeProvider>
    );
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Router />
      <Box mt={5} mb={2} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
