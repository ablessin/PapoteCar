import * as React from "react";
import TextField from "@mui/material/TextField";
import Style from "./auth.module.css";
import { Grid, Stack, Camera } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SignpStep1() {
  const [nickname, setNickname] = React.useState("");

  return (
    <>
      <Grid item xs={12} sx={{ width: "100%" }}>
        <Stack
          direction="column"
          alignItems="center"
          sx={{
            border: "1px solid",
            margin: "15px 0px",
            padding: "10px",
          }}
        >
          <Typography variant="body2">Ajouter votre photo</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Nom d'utilisateur"
          type="text"
          className={Style.fieldForm}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          sx={{ width: "100%" }}
        />
      </Grid>
    </>
  );
}
