import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";

export default function ChatList() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={5}>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={3} sx={{ display: "flex", alignSelf: "flex-end" }}>
            <QuestionAnswerIcon />
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignSelf: "flex-start" }}>
            <Typography variant="h5"> Discussion </Typography>
          </Grid>
        </Grid>
        <Stack>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={3}>
              <AccountCircleIcon />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h5"> Conducteur n°1 </Typography>
            </Grid>
            <Typography>Nantes</Typography>
            <ArrowForwardIcon />
            <Typography>Bordeaux</Typography>
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
}
