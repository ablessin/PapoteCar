import * as React from "react";
import Grid from "@mui/material/Grid";

import { Box, Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Recap() {
  return (
    <Box>
      <Typography mb={2}> Détails du trajet</Typography>

      <Card sx={{ backgroundColor: "#75D2A3" }}>
        <CardContent>
          <Box>
            <Grid container pt={2} pl={3} mb={5} spacing={2}>
              <Grid xs={6}>
                <Typography>DEPART : BORDEAUX</Typography>
              </Grid>
              <Grid xs={6}>
                <Typography>NOMBRE DE PASSAGER: LILLE</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container pt={2} pl={3} spacing={2}>
              <Grid xs={6}>
                <Typography>ARRIVÉ : 18H12</Typography>
              </Grid>
              <Grid xs={6}>
                <Typography>HEURE DE DÉPART : 10H27</Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
