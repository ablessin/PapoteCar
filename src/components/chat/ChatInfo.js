import React from "react";
import Map from "../trajetDetail/Map";
import { Box, Typography } from "@mui/material";

export default function ChatInfo() {
  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Box mb={5}>
          <Map width="50vh" height="250px" />
        </Box>
        <Typography mt={5} mb={5} variant="h5">
          Bordeaux - Lille
        </Typography>
        <Typography>
          {" "}
          Le trajet que vous avez choisie a une durée de XXheures et XXmin
          estimé
        </Typography>
        <Typography> En partant de : </Typography>
        <Typography> En arrivant a : </Typography>
      </Box>
    </>
  );
}
