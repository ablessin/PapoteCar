import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Style from "./auth.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function FormPropsTextFields() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [secondPassword, SetSecondPassword] = React.useState("");
  // const [username, setUsername] = React.useState("");
  const [surname, setSurname] = React.useState("");

  function signup() {
    const credentials = {
      email,
      password,
      secondPassword,
      firstName,
      surname,
      // username,
      gender,
    };

    fetch("http://localhost:3001/api/greenGo/v1/auth/signup/", {
      method: "POST",
      body: JSON.stringify(credentials),

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "60%",
          margin: "0 auto",
          p: 5,
          borderRadius: 5,
        }}
      >
        <Box className={Style.title}>
          <Typography variant="h2" gutterBottom>
            S'inscrire
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50%" },
          }}
          noValidate
          autoComplete="off"
          className={Style.formContainer}
        >
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Genre</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="Femme"
                control={<Radio />}
                label="Femme"
              />
              <FormControlLabel
                value="Homme"
                control={<Radio />}
                label="Homme"
              />
              <FormControlLabel
                value="Autre"
                control={<Radio />}
                label="Autre"
              />
            </RadioGroup>
          </FormControl>
          <div className={Style.inputForm}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Nom"
              type="text"
              className={Style.fieldForm}
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className={Style.inputForm}>
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
          </div>
          <div className={Style.inputForm}>
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
          </div>
          <div className={Style.inputForm}>
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Mot de passe *"
              type="password"
              autoComplete="current-password"
              className={Style.fieldForm}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={Style.inputForm}>
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Confirmation mot de passe *"
              type="password"
              autoComplete="current-password"
              className={Style.fieldForm}
              value={secondPassword}
              onChange={(e) => SetSecondPassword(e.target.value)}
            />
          </div>
          <Link href="/connexion" color="inherit" sx={{ mb: 3 }}>
            Déjà un compte ? Se connecter
          </Link>
          <Button onClick={() => signup()} variant="contained" color="success">
            Valider
          </Button>
        </Box>
      </Box>
    </>
  );
}
