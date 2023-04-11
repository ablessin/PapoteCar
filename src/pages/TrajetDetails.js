import React from "react";
import Map from "../components/trajetDetail/Map";
import { Box, Typography } from "@mui/material";
import Recap from "../components/trajetDetail/Recap";
import Passenger from "../components/trajetDetail/Passenger";

export default function Home() {
  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography mt={5} mb={5} variant="h2">
          Bordeaux - Lille
        </Typography>
        <Box mb={5}>
          <Map />
        </Box>
        <Box mb={5} sx={{ width: "80%" }}>
          <Recap />
        </Box>
        <Box sx={{ width: "80%" }}>
          <Passenger />
        </Box>
      </Box>
    </>
  );
}
