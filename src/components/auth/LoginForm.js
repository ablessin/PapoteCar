import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../../assets/css/views.css";
import { Link } from "react-router-dom";

// COMPONENTS POUR LA PARTIE DE CONNEXION DE L'APPLICATION
function LoginForm() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const handleInputChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      username: values.username,
      password: values.password,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/greenGo/v1/auth/signin",
        {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        // Redirection vers la page de confirmation
        localStorage.setItem("GreenGoGigaToken", data.accessToken);
        localStorage.setItem("GreenGoGigaUsername", values.username);
        window.location.href = "/";
      } else {
        // Affichage d'un message d'erreur
        alert("Une erreur s'est produite lors de la connexion.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ p: 5, height: "30vh" }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 2, textAlign: "center" }}
          >
            Connexion
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} sx={{ width: "100%" }}>
                <TextField
                  required
                  id="username"
                  label="Nom d'utilisateur"
                  type="text"
                  value={values.username}
                  onChange={handleInputChange("username")}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    required
                    id="password"
                    label="Mot de passe"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleInputChange("password")}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            title="Afficher le mot de passe"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: "100%" }}
                  />
                </FormControl>
              </Grid>
              <Typography mt={2}>
                {" "}
                Pas encore de compte ?{" "}
                <Link to="/inscription"> S'inscrire </Link>
              </Typography>
              <Grid container justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <Box mb={2} />
                  <Button
                    title="Se connecter"
                    className="buttonlogin"
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Se connecter
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default LoginForm;
