import * as React from "react";
import TextField from "@mui/material/TextField";
import Style from "./auth.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid } from "@mui/material";

export default function SignpStep1() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [secondPassword, setSecondPassword] = React.useState("");
  const [surname, setSurname] = React.useState("");

  return (
    <>
      <Grid item xs={12} sx={{ width: "100%" }}>
        <FormControl sx={{ width: "100%" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Genre</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => setGender(e.target.value)}
            sx={{ width: "100%" }}
            className={Style.fieldForm}
            required
          >
            <FormControlLabel value="Femme" control={<Radio />} label="Femme" />
            <FormControlLabel value="Homme" control={<Radio />} label="Homme" />
            <FormControlLabel value="Autre" control={<Radio />} label="Autre" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Nom"
          type="text"
          className={Style.fieldForm}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Prénom"
          type="text"
          className={Style.fieldForm}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Email"
          type="email"
          className={Style.fieldForm}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sx={{ width: "100%" }}>
        <TextField
          required
          fullWidth
          id="outlined-password-input"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          className={Style.fieldForm}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sx={{ width: "100%" }}>
        <TextField
          required
          fullWidth
          id="outlined-password-input"
          label="Confirmation mot de passe"
          type="password"
          autoComplete="current-password"
          className={Style.fieldForm}
          value={secondPassword}
          onChange={(e) => setSecondPassword(e.target.value)}
        />
      </Grid>
    </>
  );
}
