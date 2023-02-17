import React, { useState } from 'react';
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
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../assets/css/views.css';
function LoginForm() {
    const [values, setValues] = useState({
        email: '',
        password: '',
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted: ${values.email}, ${values.password}`);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <Container maxWidth="sm">
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h4" component="h1" sx={{ mb: 2, textAlign: "center" }}>
                        Connexion
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Adresse e-mail"
                                    type="email"
                                    value={values.email}
                                    onChange={handleInputChange('email')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        required
                                        id="password"
                                        label="Mot de passe"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleInputChange('password')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className="buttonlogin" type="submit" variant="contained" fullWidth>
                                    Se connecter
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
}

export default LoginForm;
