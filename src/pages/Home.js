import React, { useState } from "react";
import { Box } from "@mui/material";
import "../assets/css/views.css";
import HeaderLogo from "../components/core/HeaderLogo";
import CardInfo from "../components/trajet/CardInfo";
import TablePropo from "../components/core/TablePropo";
import Container from "@mui/material/Container";
export default function Home() {

  return (
    <>
      <Box>
        <HeaderLogo></HeaderLogo>
        <Box mt={8} mb={2} />
        <Container maxWidth="800px" fixed>
             <CardInfo></CardInfo>
             <Box mt={5} mb={2} />
             <TablePropo></TablePropo>
         </Container>
      </Box>
    </>
  );
}
